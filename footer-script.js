const footer = document.createElement('footer');

footer.innerHTML = `
    <div>
        <a id="logo-link" href="/"><img id="logo" src="/images/logo.png" alt="STEMBuddies Logo"></a>
    </div>

    <div class="footer-spacer-wrap">
        <h3 id="footer-header">Navigation</h3>
        <nav id="footer-links">
            <a class="footer-element" target="_self" href="/">Home</a>
            <a class="footer-element" target="_self" href="/about">About Us</a>
            <a class="footer-element" target="_self" href="/mentorship">Mentorship</a>
            <a class="footer-element" target="_self" href="/events">Events</a>
            <!--<a class="footer-element" target="_self" href="/resources">Resources</a>-->
        </nav>
    </div>

    <div class="footer-spacer-wrap">
        <h3>Contact</h3>
        <div id="footer-contacts">
            <a href="mailto:general@stembuddies.ca"><address>general@stembuddies.ca</address></a>
            <div id="footer-socials-logos">
                <a href="https://www.instagram.com/stembuddies_canada/" target="_blank"><img src="/images/homepage/instagram-logo.png" class="socials-logo"></a>
                <a href="https://linktr.ee/stembuddies_" target="_blank"><img src="/images/homepage/linktree-logo.png" class="socials-logo"></a>
            </div>
        </div>
        <!--<p id="copyright">© 2024 - STEMBuddies</p>-->
    </div>
`;

document.body.append(footer);