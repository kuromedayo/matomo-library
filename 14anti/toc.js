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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="about.html">このサイトについて</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><a href="prologue.html">プロローグ</a></li><li class="chapter-item "><a href="chapter_1.html"><strong aria-hidden="true">1.</strong> サボることは社会貢献</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chapter_1-1.html"><strong aria-hidden="true">1.1.</strong> 君は君の役に立て</a></li><li class="chapter-item "><a href="chapter_1-2.html"><strong aria-hidden="true">1.2.</strong> 食欲は存在しない</a></li><li class="chapter-item "><a href="chapter_1-3.html"><strong aria-hidden="true">1.3.</strong> 人は殺してもいい</a></li></ol></li><li class="chapter-item "><a href="chapter_2.html"><strong aria-hidden="true">2.</strong> 労働という悪魔の正体</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chapter_2-1.html"><strong aria-hidden="true">2.1.</strong> 労働とは支配されること</a></li><li class="chapter-item "><a href="chapter_2-2.html"><strong aria-hidden="true">2.2.</strong> 命を狙われる労働者</a></li><li class="chapter-item "><a href="chapter_2-3.html"><strong aria-hidden="true">2.3.</strong> ゲームを嫌いになる方法</a></li><li class="chapter-item "><a href="chapter_2-4.html"><strong aria-hidden="true">2.4.</strong> 靴なんか履きたくない</a></li><li class="chapter-item "><a href="chapter_2-5.html"><strong aria-hidden="true">2.5.</strong> みんなで社畜になればいい？</a></li></ol></li><li class="chapter-item "><a href="chapter_3.html"><strong aria-hidden="true">3.</strong> 労働は本当に必要か？</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chapter_3-1.html"><strong aria-hidden="true">3.1.</strong> 無意味な労働の数々</a></li><li class="chapter-item "><a href="chapter_3-2.html"><strong aria-hidden="true">3.2.</strong> ゴミのために働く大人たち</a></li><li class="chapter-item "><a href="chapter_3-3.html"><strong aria-hidden="true">3.3.</strong> お金を稼ぐのは偉くない</a></li><li class="chapter-item "><a href="chapter_3-4.html"><strong aria-hidden="true">3.4.</strong> 学歴は金儲けの許可証</a></li><li class="chapter-item "><a href="chapter_3-5.html"><strong aria-hidden="true">3.5.</strong> ドラえもんはいつ生まれるの？</a></li></ol></li><li class="chapter-item "><a href="chapter_4.html"><strong aria-hidden="true">4.</strong> お金を配ろう</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chapter_4-1.html"><strong aria-hidden="true">4.1.</strong> お金を配れば解決</a></li><li class="chapter-item "><a href="chapter_4-2.html"><strong aria-hidden="true">4.2.</strong> 権力者に逆らおう</a></li><li class="chapter-item "><a href="chapter_4-3.html"><strong aria-hidden="true">4.3.</strong> 家族はフィクション</a></li><li class="chapter-item "><a href="chapter_4-4.html"><strong aria-hidden="true">4.4.</strong> 我慢をやめて環境問題解決</a></li></ol></li><li class="chapter-item "><a href="chapter_5.html"><strong aria-hidden="true">5.</strong> 人間が欲望するもの</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chapter_5-1.html"><strong aria-hidden="true">5.1.</strong> 本当にお金のため？</a></li><li class="chapter-item "><a href="chapter_5-2.html"><strong aria-hidden="true">5.2.</strong> トイレに行くと決めたのは？</a></li><li class="chapter-item "><a href="chapter_5-3.html"><strong aria-hidden="true">5.3.</strong> あれもこれも欲望</a></li><li class="chapter-item "><a href="chapter_5-4.html"><strong aria-hidden="true">5.4.</strong> 永遠にレベル１の人生</a></li><li class="chapter-item "><a href="chapter_5-5.html"><strong aria-hidden="true">5.5.</strong> ニートは正義のレジスタンス</a></li></ol></li><li class="chapter-item "><a href="chapter_6.html"><strong aria-hidden="true">6.</strong> 労働とお金</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chapter_6-1.html"><strong aria-hidden="true">6.1.</strong> 他人を道具にする方法</a></li><li class="chapter-item "><a href="chapter_6-2.html"><strong aria-hidden="true">6.2.</strong> 労働が生まれた日</a></li><li class="chapter-item "><a href="chapter_6-3.html"><strong aria-hidden="true">6.3.</strong> お金というイノベーション</a></li><li class="chapter-item "><a href="chapter_6-4.html"><strong aria-hidden="true">6.4.</strong> お金はコスパが悪い</a></li><li class="chapter-item "><a href="chapter_6-5.html"><strong aria-hidden="true">6.5.</strong> 価値を比較する理由</a></li><li class="chapter-item "><a href="chapter_6-6.html"><strong aria-hidden="true">6.6.</strong> 八十億総ニート</a></li></ol></li><li class="chapter-item "><a href="chapter_7.html"><strong aria-hidden="true">7.</strong> 労働なき世界</a></li><li class="chapter-item affix "><a href="epilogue.html">エピローグ</a></li><li class="chapter-item affix "><a href="kaisetsu.html">解説(哲学チャンネル)</a></li><li class="chapter-item affix "><a href="atogaki.html">あとがき</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><a href="Reference.html">解説と参考文献</a></li><li class="chapter-item affix "><a href="roudou-teigi.html">　労働の定義について</a></li></ol>';
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
