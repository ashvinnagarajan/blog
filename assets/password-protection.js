(function() {
  'use strict';

  // Get the post password from the data attribute
  function initPasswordProtection() {
    const postContainer = document.querySelector('[data-post-password]');
    if (!postContainer) {
      return; // No password protection needed
    }

    const postPassword = postContainer.getAttribute('data-post-password');
    const postUrl = window.location.pathname;
    const storageKey = 'post_auth_' + postUrl.replace(/\//g, '_');

    // Check if already authenticated
    if (sessionStorage.getItem(storageKey) === 'true') {
      showContent(postContainer);
      return;
    }

    // Show password prompt (content is already hidden by CSS)
    showPasswordPrompt(postContainer, postPassword, storageKey);
  }

  function showPasswordPrompt(container, correctPassword, storageKey) {
    // Content is already hidden by CSS class, just show the prompt

    // Create password prompt UI
    const promptDiv = document.createElement('div');
    promptDiv.className = 'password-prompt';
    promptDiv.innerHTML = `
      <div class="password-prompt-container">
        <h2>🔒 Protected Post</h2>
        <p>This post is password protected. Please enter the password to continue reading.</p>
        <form class="password-form" onsubmit="return false;">
          <input type="password" 
                 class="password-input" 
                 placeholder="Enter password" 
                 autocomplete="current-password"
                 required>
          <button type="submit" class="password-submit">Unlock</button>
        </form>
        <p class="password-error" style="display: none; color: #d73a49; margin-top: 10px;"></p>
      </div>
    `;

    // Insert prompt before the content
    container.insertBefore(promptDiv, container.firstChild);

    // Add event listeners
    const form = promptDiv.querySelector('.password-form');
    const input = promptDiv.querySelector('.password-input');
    const errorMsg = promptDiv.querySelector('.password-error');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      checkPassword(input.value, correctPassword, storageKey, container, promptDiv, errorMsg);
    });

    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        form.dispatchEvent(new Event('submit'));
      }
    });

    // Focus the input
    input.focus();
  }

  function checkPassword(enteredPassword, correctPassword, storageKey, container, promptDiv, errorMsg) {
    // Simple comparison (you could use hashing here for better security)
    if (enteredPassword === correctPassword) {
      // Store authentication
      sessionStorage.setItem(storageKey, 'true');
      
      // Hide prompt and show content
      promptDiv.style.display = 'none';
      showContent(container);
    } else {
      // Show error
      errorMsg.textContent = 'Incorrect password. Please try again.';
      errorMsg.style.display = 'block';
      
      // Clear input and focus
      const input = container.querySelector('.password-input');
      if (input) {
        input.value = '';
        input.focus();
      }
    }
  }

  function showContent(container) {
    const content = container.querySelector('.protected-content');
    if (content) {
      // Remove password-protected class and add authenticated class
      content.classList.remove('password-protected');
      content.classList.add('password-authenticated');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPasswordProtection);
  } else {
    initPasswordProtection();
  }
})();

