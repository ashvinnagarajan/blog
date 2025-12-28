---
layout: post
title: Chainguard: De-Risking Open Source Adoption
categories: [Technology]
tags: [Chainguard, open source, security, supply chain, compliance]
date: 2025-06-25
excerpt_separator: <!--more-->
---

**Software companies** universally rely on open-source software to service as foundational building blocks for their products. This approach accelerates the pace of development and allows companies to leverage battle-tested solutions to solved problems in software. However, the reality is that these open-source components often contain security vulnerabilities, and the security of these packages is not always a primary focus for their maintainers.
<!--more-->

In many cases, the complexity stems from deeply nested dependency chains involving languages, libraries, frameworks, and infrastructure. A single software package may pull in dozens or even hundreds of indirect dependencies. Furthermore, because these components are publicly available, vulnerabilities may be identified and publicly disclosed by anyone on the internet, resulting in a constant stream of newly reported CVEs (Common Vulnerabilities and Exposures).

Not all reported vulnerabilities carry the same level of risk. Often, the context in which a vulnerability is exploitable is highly constrained. As the maintainers of SQLite humorously note:

"In the case of SQLite, most of the bugs reported by CVEs are inaccessible in most applications. Upgrading to the latest version of SQLite is always a good plan, but it need not be an emergency just because an anonymous grey-hat on the internet wrote up a CVE."

![SQLite CVE discussion]({{ "/assets/sqllite.png" | relative_url }})
<br/><br/>

This is true for many software packages where exploitation requires privileged access or specific preconditions — the kind of access that, if compromised, likely indicates much broader systemic issues.

For a security-minded software company, parsing through hundreds or thousands of documented CVEs to determine the exploitability and severity of vulnerabilities in the context of a larger application is an immensely tedious and time-consuming process. And that is only the beginning. Once vulnerabilities are identified, the process of patching the third party images, validating their compatibility, and documenting the process introduces additional operational overhead.

Maintaining SOC-2, FedRAMP, and PCI-DSS compliance requires evidence of vulnerability management, penetration testing, and continuous monitoring of system security controls. The engineering cost of managing failed audits, legal risk, reputational damage, and the operational burden of triaging thousands of vulnerabilities can be enormous.

Chainguard offers to address this tension in software development by providing a secure solution for the software supply chain. Chainguard provides hardened, minimal, and continuously rebuilt components which will serve as secure building blocks for larger applications. They produce container images for widely used third-party packages that are rebuilt from the source after addressing known CVEs. Their library includes everything from RabbitMQ to Kube RBAC Proxy and everything in between. The images come with a comparison to the publicly available image, documenting how the Critical and High severity vulnerabilities are reduced or eliminated in the hardened image.

These images are designed to function as drop-in replacements with minimal or no behavioral change to the underlying business logic. Similarly, they rebuild and validate secure language libraries to ensure integrity throughout the development stack. At the infrastructure layer, Chainguard offers hardened virtual machine images optimized for secure operation in cloud environments.
<br/><br/>

![Comparison between Chainguard's hardened RabbitMQ image and the publically available RabbitMQ image]({{ "/assets/chainguard.png" | relative_url }})
<br/><br/>

By providing these secure-by-design components, Chainguard allows organizations to adopt open-source software with confidence, dramatically lowering their exposure to supply chain attacks while simplifying compliance and vulnerability management processes. This proactive mitigation of vulnerabilities is a distinct part of the security value chain compared to vulnerability scanners like Wiz, Snyk, or Orca Security which detect issues reactively in deployed infrastructure. For a fast-moving software company, approaches like Chainguard may represent a competitive advantage to reduce time to market and increase trust with partners.

