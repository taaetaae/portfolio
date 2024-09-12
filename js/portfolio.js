$(document).ready(function () {


    // 스크롤 내렸을 때 헤더 안보이고, 스크롤 올렸을 때 나타나게 

  $(function(){
    let lastScrollTop = 0;
    const delta = 15;
  
    $(window).scroll(function(event){
      const st = $(this).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta) return;
      if((st > lastScrollTop) && (lastScrollTop > 0)) {
        $('header').addClass('nav-up');
      }else {
        $('header').removeClass('nav-up');
      };
      lastScrollTop = st;
    });
  });


    // scroll 900 이상으로 내려갔을 때 이벤트
    window.addEventListener('scroll', function () {

        let menu = document.querySelector('.i_header');
        if (window.scrollY > 900) { // Change 100 to the height you want
            $(".i_header").css({
                color: '#D14900',
            });

            $("header").css({
                backgroundColor: '#fff'
            });

            $(".scrollev").fadeOut();

            $(".sitemap").css({
                backgroundColor: '#ffffff52'
            })

        } else {
            $(".i_header").css({
                color: '#fff'
            });

            $("header").css({
                background: 'none'
            });
            $(".scrollev").fadeIn();

            $(".sitemap").css({
                backgroundColor: 'transparent'
            })

        }

    });



    // ham > sitemap slidedown


    $(".site").click(function(){
      $(".sitemap").toggleClass('down');

      if ($(".sitemap").hasClass('down')) {
        $(".sitemap li", this).stop().slideDown()
      } else {
        $(".sitemap li", this).stop().slideUp()
      }
    })




    // $(".site").on({
    //     mouseover: function () {
    //         $(".sitemap li", this).stop().slideDown();
    //     },
    //     mouseout: function () {
    //         $(".sitemap li", this).stop().slideUp();
    //     }
    // });

    // 메인 페이지 type effect

    class TextScramble {
        constructor(el) {
            this.el = el
            this.chars = '!<>-_\\/[]{}—=+*^?#___'
            this.update = this.update.bind(this)
        }
        setText(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * 40)
                const end = start + Math.floor(Math.random() * 40)
                this.queue.push({ from, to, start, end })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
        }
        update() {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i]
                if (this.frame >= end) {
                    complete++
                    output += to
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar()
                        this.queue[i].char = char
                    }
                    output += `<span class="dud">${char}</span>`
                } else {
                    output += from
                }
            }
            this.el.innerHTML = output
            if (complete === this.queue.length) {
                this.resolve()
            } else {
                this.frameRequest = requestAnimationFrame(this.update)
                this.frame++
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
    }

    // ——————————————————————————————————————————————————
    // Example
    // ——————————————————————————————————————————————————

    const phrases = [
        'Hello!',
        'Taekyoung&rsquo;s <br>Portfolio.',
        'Start!'
    ]

    const el = document.querySelector('.typeeffect')
    const fx = new TextScramble(el)

    let counter = 0
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 800)
        })
        counter = (counter + 1) % phrases.length
    }

    next();

    //portfolio 소제목 마우스오버 시 숫자 색 변경

    $(".portfolio .port_wrap .port_list li a").on({
        mouseover:function(){
          $(this).find("h3").stop().css({
            color:'#FFD22A'
          })
        },
  
        mouseout:function(){
            $(this).find("h3").stop().css({
                color:'#fff'
              })
        }
      })


    // project gobtn 마우스 오버 시 색 변경
    $(".gobtn").on({
      mouseover:function(){
        $(this).stop().css({
          backgroundColor:'#000',
          color:'#FFD22A'
        })
      },

      mouseout:function(){
        $(this).stop().css({
          backgroundColor:'#fff',
          color:'#0a0a0a',
          border:'1px solid #0000005d'
          
        })
      }
    });

        // contact btn 마우스 오버 시 색 변경
        $(".contact_btn").on({
            mouseover:function(){
              $(this).stop().css({
                backgroundColor:'#FFD22A',
                color:'#000',
                borderColor:'#ffd22a',
                fontWeight:'700'
              })
            },
      
            mouseout:function(){
              $(this).stop().css({
                backgroundColor:'#000',
                color:'#fff',
                borderColor:'#fff',
                fontWeight:'300'

                
              })
            }
          });

    // contact kakaotalk 전송 버튼 > 팝업 열림 /  xbtn > 팝업 닫힘

    $(".kakao").click(function(){
      $(".popup").fadeIn();
    })
    $(".popup .xbtn").click(function(){
      $(".popup").fadeOut();
    });


});