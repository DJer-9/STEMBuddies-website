const header = document.createElement('header');

header.innerHTML = `
    <a id="icon-link" target="_self" href="/"><img id="icon" src="/images/icon.png" alt="STEMBuddies Icon"></a>

    <input type="checkbox" id="sidebar-button">
    <div id="sidebar-icon">
        <label for="sidebar-button"><svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></label>
    </div>
    <label for="sidebar-button" id="overlay"></label> <!--clicking outside of sidebar deactivates-->

    <nav id="header-links">
        <label for="sidebar-button" id="sidebar-close"><svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></label>
        
        <a class="header-element" target="_self" href="/">Home</a>
        <a class="header-element" target="_self" href="/about">About Us</a>

        <div class="dropdown">
            <a class="header-element dropdown-trigger">Mentorship <svg class="caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></a>
            <div class="dropdown-content">
                <a class="header-element" target="_self" href="/mentorship">Find a STEMBuddy</a>
                <a class="header-element" target="_self" href="/NEST">NEST</a>
            </div>
        </div>

        <a class="header-element" target="_self" href="/events">Events</a>
        <!--<a class="header-element" target="_self" href="/resources">Resources</a>-->
    </nav>
`;

document.body.prepend(header);