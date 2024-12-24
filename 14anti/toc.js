// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="about.html">このサイトについて</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><a href="prologue.html">プロローグ</a></li><li class="chapter-item "><a href="chapter_1.html"><strong aria-hidden="true">1.</strong> サボることは社会貢献</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chapter_1-1.html"><strong aria-hidden="true">1.1.</strong> 君は君の役に立て</a></li><li class="chapter-item "><a href="chapter_1-2.html"><strong aria-hidden="true">1.2.</strong> 食欲は存在しない</a></li><li class="chapter-item "><a href="chapter_1-3.html"><strong aria-hidden="true">1.3.</strong> 人は殺してもいい</a></li></ol></li><li class="chapter-item "><a href="chapter_2.html"><strong aria-hidden="true">2.</strong> 労働という悪魔の正体</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chapter_2-1.html"><strong aria-hidden="true">2.1.</strong> 君は君の役に立て</a></li><li class="chapter-item "><a href="chapter_2-2.html"><strong aria-hidden="true">2.2.</strong> 食欲は存在しない</a></li><li class="chapter-item "><a href="chapter_2-3.html"><strong aria-hidden="true">2.3.</strong> 人は殺してもいい</a></li></ol></li><li class="chapter-item "><a href="chapter_3.html"><strong aria-hidden="true">3.</strong> 労働は本当に必要か？</a></li><li class="chapter-item "><a href="chapter_4.html"><strong aria-hidden="true">4.</strong> お金を配ろう</a></li><li class="chapter-item "><a href="chapter_5.html"><strong aria-hidden="true">5.</strong> 人間が欲望するもの</a></li><li class="chapter-item "><a href="chapter_6.html"><strong aria-hidden="true">6.</strong> 労働とお金</a></li><li class="chapter-item "><a href="chapter_7.html"><strong aria-hidden="true">7.</strong> 労働なき世界</a></li><li class="chapter-item affix "><a href="epilogue.html">エピローグ</a></li><li class="chapter-item affix "><a href="kaisetsu.html">解説(哲学チャンネル)</a></li><li class="chapter-item affix "><a href="atogaki.html">あとがき</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><a href="Reference.html">解説と参考文献</a></li><li class="chapter-item affix "><a href="roudou-teigi.html">　労働の定義について</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);