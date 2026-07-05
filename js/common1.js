

$(window).on('load', function() {
    // 直接显示或添加淡入效果
    $('body').fadeIn(600);
});


$(function () {
	// 入场动画
	var w = $(window).width();
	if (w > 1200) {
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
			new WOW(
				{
					callback: function (box) {
						$(box).addClass("wow1");
					}
				}).init();

		}

		$(window).resize(function () {

			new WOW(
				{
					callback: function (box) {
						$(box).addClass("wow1");
					}
				}).init();

		});
	}

	//锚点跳转滑动效果  
	$('a.ph').click(function () {
		$('a.ph').removeClass("on")
		$(this).addClass("on")
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			// console.log($target.offset().top)
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({
					scrollTop: targetOffset + 0 + "px"

				},
					1000);
				return false;
			}
		}
	});

	// 顶部样式
	var p = 0; t = 20;
	$(window).scroll(function () {
		var hz = $(window).height()
		p = $(this).scrollTop();
		var w = $(window).width()
		if (t <= p) {
			//('下滚')
			$(".header").addClass("on")
			$(".cons .svgs").addClass("on")
			$(".header").addClass("hid")
		}
		else if (t > p) {
			//('上滚')
			$(".header").removeClass("on")
			$(".cons .svgs").removeClass("on")
			$(".header").removeClass("hid")

		}
		$(".sptext").each(function () {
			var topx = $(window).scrollTop() - $(this).offset().top + hz * 0.8
			// console.log(topx*0.1)
			if (topx > 0) {
				$(this).find(".after").css("clip-path", "polygon(0% 0%, " + (topx * 0.17) + "% 0%, " + (topx * 0.17) + "% 100%, 0% 100%)")
			} else {
				$(this).find(".after").css("clip-path", "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)")
			}

			if ($(window).scrollTop() == 0) {
				$(this).find(".after").css("clip-path", "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)")
			}

		})

	})



	let lastScrollTop = 0;
	$(window).on('scroll', function () {
		// 获取当前滚动条垂直位置
		let scrollTop = $(this).scrollTop();
		if (scrollTop > lastScrollTop) {
			// 下滚
			$(".header").addClass("up")
		} else {
			// 上滚
			$(".header").removeClass("up")
		}
		// 更新上一次的滚动位置
		lastScrollTop = scrollTop;
	});

	/*手机头部*/
	// var w = $(window).width();
	// if (w < 1200) {
	// 	/*手机头部*/
	// 	$(".h_mean").click(function () {
	// 		$(".mh_nav").addClass("show")
	// 	})

	// 	$(".mh_nav .close").click(function () {
	// 		$(".mh_nav").removeClass("show")
	// 	})

	// 	$(".mh_nav .nav>li").click(function () {
	// 		if ($(this).hasClass("on")) {
	// 			$(this).removeClass("on")
	// 			$(this).find(".nav1").stop().slideUp()
	// 		} else {
	// 			$(this).addClass("on")
	// 			$(this).find(".nav1").stop().slideDown()
	// 		}
	// 	})
	// }

	

	// 回到顶部
	$(".f_top").click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	





	SmoothScroll({
		// scroll time 400 = 0.4 sec.
		animationTime: 1000,
		// pixel size step
		stepSize: 75,

		// Additional settings:

		// Speed
		accelerationDelta: 50,
		// Max speed
		accelerationMax: 2,

		// keyboard
		keyboardSupport: true,
		// step scroll with arrow
		arrowScroll: 50,

		// Pulse (less tweakable)
		// ratio of "tail" to "acceleration"
		pulseAlgorithm: true,
		pulseScale: 4,
		pulseNormalize: 1,

		// touchpad
		touchpadSupport: true,
	})


	//分页
	$(".page .num li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	});

	$(".page .btn.prev").click(function () {
		var $active = $(".page .num li.active");
		var $prev = $active.prev();
		if ($prev.length) {
			$active.removeClass("active");
			$prev.addClass("active");
		}
	});

	$(".page .btn.next").click(function () {
		var $active = $(".page .num li.active");
		var $next = $active.next();
		if ($next.length) {
			$active.removeClass("active");
			$next.addClass("active");
		}
	});



})

$('.nav').on('mouseenter', '.item', function () {
  $(this).find('.li_box').addClass('active');
}).on('mouseleave', '.item', function () {
    $(this).find('.li_box').removeClass('active');
});


$('.header .btns_m .menu_icon').click(function() {
    $('.header .nav_m').toggleClass('show')
})
$('.header .nav_m .item .label .icon').click(function() {
    $(this).toggleClass('show')
    $(this).parent('.label').siblings('.li_box').toggleClass('show');
})

$('.footer .content .ul_m .label .icon').click(function() {
    $(this).toggleClass('show')
    $(this).parent('.label').siblings('.li_box').toggleClass('show');
})

SmoothScroll({
	// scroll time 400 = 0.4 sec.
	animationTime: 1000,
	// pixel size step
	stepSize: 75,

	// Additional settings:

	// Speed
	accelerationDelta: 50,
	// Max speed
	accelerationMax: 2,

	// keyboard
	keyboardSupport: true,
	// step scroll with arrow
	arrowScroll: 50,

	// Pulse (less tweakable)
	// ratio of "tail" to "acceleration"
	pulseAlgorithm: true,
	pulseScale: 4,
	pulseNormalize: 1,

	// touchpad
	touchpadSupport: true,
})
	
/**
 * 初始化语言切换下拉框（支持多实例）
 * @param {string} selector - 语言选择器的CSS选择器，默认.lang-selector
 */
function initLangSelector(selector = '.lang-selector') {
	const langSelectors = document.querySelectorAll(selector);
	langSelectors.forEach(langSelector => {
		// 原逻辑（把之前的代码嵌套到这里）
		const langItems = langSelector.querySelectorAll('.lang-selector-dropdown li');
		const currentLangEl = langSelector.querySelector('.current-lang');

		function changeLang(selectedLang) {
			if (currentLangEl) {
				currentLangEl.textContent = selectedLang;
			}
		}

		langItems.forEach(item => {
			item.addEventListener('click', function () {
				const selectedLang = this.getAttribute('data-lang');
				if (selectedLang) {
					changeLang(selectedLang);
				}
			});
		});
	});
	// 点击外部关闭逻辑（略）
}

initLangSelector()

/**
 * 【jQuery版】监听元素进入/离开视口并修改/移除目标元素属性
 * @param {string|jQuery|HTMLElement} observeEl - 被观察元素（选择器/jQuery对象/DOM元素）
 * @param {string|jQuery|HTMLElement} targetEl - 目标元素（选择器/jQuery对象/DOM元素）
 * @param {Object} attrObj - 进入视口时要添加的属性键值对（支持样式/普通属性/class）
 * @param {Object} [options={}] - 配置项
 * @param {boolean} [options.once=true] - 是否只触发一次进入视口逻辑
 * @param {string} [options.rootMargin='0px'] - 视口偏移
 * @param {number} [options.threshold=0] - 可见阈值（0-1）
 * @param {Function} [options.callback] - 进入视口额外回调
 * @param {Function} [options.leaveCallback] - 离开视口额外回调
 * @param {boolean} [options.resetOnLeave=true] - 离开视口时是否移除添加的属性（true：移除，false：保留）
 * @returns {IntersectionObserver} 观察器实例
 */
function observeViewport(observeEl, targetEl, attrObj, options = {}) {
	// 默认配置
	const config = $.extend({
		once: true,
		rootMargin: '0px',
		threshold: 0,
		callback: null,
		leaveCallback: null,
		resetOnLeave: true // 新增：离开视口默认移除属性
	}, options);

	// 统一转为jQuery对象
	const $observe = $(observeEl);
	const $target = $(targetEl);

	// 校验元素是否存在
	if (!$observe.length) {
		console.error('观察元素不存在:', observeEl);
		return null;
	}
	if (!$target.length) {
		console.error('目标元素不存在:', targetEl);
		return null;
	}

	// 存储元素原始属性（用于离开视口时还原）
	const originalAttrs = {};
	let isTriggered = false; // 标记是否已触发过进入视口逻辑

	// 初始化：保存目标元素的原始属性
	$.each(attrObj, (key, value) => {
		if (key.startsWith('style.')) {
			const styleKey = key.replace('style.', '');
			originalAttrs[key] = $target.css(styleKey); // 保存原始样式
		} else if (key === 'class') {
			originalAttrs[key] = $target.attr('class') || ''; // 保存原始class
		} else {
			originalAttrs[key] = $target.attr(key); // 保存原始普通属性
		}
	});

	// 创建观察器
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			// 元素进入视口
			if (entry.isIntersecting) {
				// 如果设置只触发一次，且已触发过则跳过
				if (config.once && isTriggered) return;

				isTriggered = true; // 标记已触发

				// 遍历添加属性
				$.each(attrObj, (key, value) => {
					if (key.startsWith('style.')) {
						const styleKey = key.replace('style.', '');
						$target.css(styleKey, value);
					} else if (key === 'class') {
						$target.attr('class', value); // 覆盖class（如需追加用addClass）
					} else {
						$target.attr(key, value);
					}
				});

				// 执行进入视口回调
				$.isFunction(config.callback) && config.callback($observe, $target);
			}
			// 元素离开视口
			else {
				// 如果配置了离开时重置属性
				if (config.resetOnLeave) {
					$.each(attrObj, (key) => {
						if (key.startsWith('style.')) {
							const styleKey = key.replace('style.', '');
							// 还原原始样式（如果原始值为空则移除样式）
							const originalValue = originalAttrs[key];
							$target.css(styleKey, originalValue === undefined ? '' : originalValue);
						} else if (key === 'class') {
							// 还原原始class
							$target.attr('class', originalAttrs[key] || '');
						} else {
							const originalValue = originalAttrs[key];
							if (originalValue === undefined) {
								// 原始无该属性则移除
								$target.removeAttr(key);
							} else {
								// 原始有该属性则还原
								$target.attr(key, originalValue);
							}
						}
					});
				}

				// 执行离开视口回调
				$.isFunction(config.leaveCallback) && config.leaveCallback($observe, $target);

				// 如果是一次性触发，离开后重置标记（可选，根据需求调整）
				// if (config.once) isTriggered = false;
			}
		});
	}, {
		root: null,
		rootMargin: config.rootMargin,
		threshold: config.threshold
	});

	// 开始观察（取第一个DOM元素）
	observer.observe($observe[0]);

	return observer;
}

// AOS初始化
$(window).on('load', function () {
    AOS.init({
        offset: 150,
        duration: 1200,
        once: true,
        mirror: false,
        anchorPlacement: 'top-center',
        easing: 'ease-out-quad',
        // 禁用逻辑写标准一点
        disable: window.innerWidth <= 1024
    });
});

// 回到顶部
$(".f_top").click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});

$('.form').submit(function (event) {
    event.preventDefault(); // 阻止表单默认提交
    const $form = $(this);
    var formData = $(this).serialize(); // 序列化表单数据

    $.ajax({
        url: '/message',
        method: 'POST',
        data: formData,
        success: function (response) {
            // 请求成功时的回调函数
            console.log("后端返回内容：", response);

            // 核心：直接执行后端返回的脚本（保留后端原生逻辑）
            if (response && typeof response === 'string') {
                try {
                    // 方式1：创建script标签插入页面执行（比eval更贴近原生脚本执行逻辑）
                    const script = document.createElement('script');
                    // 提取script标签内的代码（去掉外层<script>标签）
                    const scriptContent = response.replace(/<script>|<\/script>/g, '');
                    script.textContent = scriptContent;
                    document.body.appendChild(script);
                    // 执行后移除临时script标签
                    document.body.removeChild(script);
                    
                    // 重置表单（后端脚本里没重置，这里补充）
                    $form[0].reset();
                } catch (err) {
                    console.error("执行后端脚本出错：", err);
                    // 仅当脚本执行失败时才用兜底提示，否则完全用后端的提示
                    alert("操作失败，请联系管理员！");
                }
            }
        },
        error: function (e) {
            console.error("AJAX请求失败：", e);
            // 请求层面的失败，后端没返回脚本，用兜底提示
            alert('提交失败，请检查网络连接！');
        }
    });
});



/**
 * 左侧进度导航公共类（面向对象版，支持多实例、可扩展）
 * @class ProgressNav
 * @param {Object} options 自定义配置项
 */
/**
 * 左侧进度导航公共类（面向对象版，支持多实例、可扩展）
 * @class ProgressNav
 * @param {Object} options 自定义配置项
 */
class ProgressNav {
  // 构造函数：接收配置项，初始化基础属性
  constructor(options = {}) {
    // 1. 默认配置（新增进度条相关选择器，避免固定选择器隐患）
    this.defaultOptions = {
      navItemSelector: '.nav-item',
      progressFillSelector: '.progress-fill',
      contentItemSelector: '.content_item',
      progressLineSelector: '.progress-line', // 新增：进度线条选择器
      progressNavSelector: '.progress-nav',   // 新增：进度导航容器选择器
      scrollThreshold: 0.33,
      smoothScroll: true,
      activeClass: 'active',
      completedClass: 'completed'
    };

    // 2. 合并配置（用户配置覆盖默认配置）
    this.config = Object.assign({}, this.defaultOptions, options);

    // 3. 初始化核心元素（新增进度条相关元素，纳入实例属性）
    this.navItems = document.querySelectorAll(this.config.navItemSelector);
    this.progressFill = document.querySelector(this.config.progressFillSelector);
    this.contentItems = document.querySelectorAll(this.config.contentItemSelector);
    this.progressLine = document.querySelector(this.config.progressLineSelector); // 新增
    this.progressNav = document.querySelector(this.config.progressNavSelector);   // 新增
    this.totalNavCount = this.navItems.length;

    // 4. 初始化校验
    this.validateElements();
  }

  // 方法1：元素校验（公共方法健壮性保障，新增进度条元素校验）
  validateElements() {
    const requiredElements = [
      this.navItems.length > 0,
      this.progressFill,
      this.contentItems.length > 0,
      this.progressLine,  // 新增校验
      this.progressNav    // 新增校验
    ];
    if (!requiredElements.every(Boolean)) {
      console.error('【ProgressNav】核心元素缺失，初始化失败，请检查选择器是否正确');
      return false;
    }
    return true;
  }
  
  // 方法1.1：动态计算进度条容器高度（保持逻辑不变，优化元素获取）
  calculateProgressLineHeight() {
    if (this.navItems.length === 0) return 0;

    const firstItem = this.navItems[0];
    const lastItem = this.navItems[this.navItems.length - 1];
    
    // 这里无需修改，getBoundingClientRect() 本身是实时的，问题在调用时机
    const firstItemRect = firstItem.getBoundingClientRect();
    const lastItemRect = lastItem.getBoundingClientRect();
    
    const firstItemCenter = firstItemRect.top + firstItemRect.height / 2;
    const lastItemCenter = lastItemRect.top + lastItemRect.height / 2;
    
    return lastItemCenter - firstItemCenter;
  }

  // 方法1.2：更新进度条容器高度和位置（优化元素获取，新增容错）
  updateProgressLineHeight() {
    if (!this.progressLine || !this.progressNav || this.navItems.length === 0) return;

    // 关键优化1：使用 requestAnimationFrame 确保在浏览器下一帧渲染完成后执行计算
    requestAnimationFrame(() => {
      const height = this.calculateProgressLineHeight();
      // 容错：避免高度为0或负数导致进度条丢失
      if (height <= 0) return;
      
      this.progressLine.style.height = `${height}px`;
      
      const firstItem = this.navItems[0];
      const firstItemRect = firstItem.getBoundingClientRect();
      const firstItemCenter = firstItemRect.top + firstItemRect.height / 2;
      const progressNavRect = this.progressNav.getBoundingClientRect();
      
      const relativeTop = firstItemCenter - progressNavRect.top;
      // 容错：避免top值异常
      this.progressLine.style.top = `${Math.max(0, relativeTop)}px`;
    });
  }

  // 方法2：初始化内容项ID（保持不变）
  initContentIds() {
    this.contentItems.forEach((item, index) => {
      const targetId = `section${index + 1}`;
      item.id = targetId;
      if (this.navItems[index]) {
        this.navItems[index].setAttribute('data-target', targetId);
      }
    });
  }

  // 方法3：绑定导航项点击事件（保持不变）
  bindNavClick() {
    this.navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        const targetId = navItem.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;

        targetSection.scrollIntoView({
          behavior: this.config.smoothScroll ? 'smooth' : 'auto',
          block: 'start'
        });
      });
    });
  }

  // 方法4：更新导航项状态（保持不变）
  updateNavStatus(activeIndex) {
    this.navItems.forEach((navItem, index) => {
      navItem.classList.remove(this.config.activeClass, this.config.completedClass);
      if (index < activeIndex) {
        navItem.classList.add(this.config.completedClass);
      }
      if (index === activeIndex) {
        navItem.classList.add(this.config.activeClass);
      }
    });
  }

  // 方法5：更新进度条（保持不变）
  updateProgress(activeIndex) {
    if (activeIndex !== -1) {
      const progressPercent = ((activeIndex + 1) / this.totalNavCount) * 100;
      this.progressFill.style.height = `${progressPercent}%`;
    } else {
      this.progressFill.style.height = '0%';
    }
  }

  // 方法6：绑定滚动联动事件（保持不变）
  bindScrollEvent() {
    window.addEventListener('scroll', () => {
      let activeIndex = -1;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      this.contentItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemTop = itemRect.top + scrollTop;
        const itemBottom = itemTop + itemRect.height;

        const isInView = (itemTop <= scrollTop + windowHeight * this.config.scrollThreshold) && (itemBottom >= scrollTop);
        if (isInView) {
          activeIndex = index;
        }
      });

      this.updateNavStatus(activeIndex);
      this.updateProgress(activeIndex);
    });
  }

  // 方法7：初始化入口（公共方法，外部调用）- 核心优化：调整时序+增加延迟兜底
  init() {
    if (!this.validateElements()) return;
    this.initContentIds();
    this.bindNavClick();
    this.bindScrollEvent();
    
    // 关键优化2：优先使用 DOMContentLoaded（DOM渲染完成），再叠加 window.load（资源完成）
    // 确保无论DOM还是资源，都完成后再执行
    const initProgressLine = () => {
      // 先执行一次更新
      this.updateProgressLineHeight();
      // 兜底：延迟200ms再执行一次，应对极慢的渲染场景（可根据需求调整）
      setTimeout(() => {
        this.updateProgressLineHeight();
      }, 200);
    };

    // 场景1：DOM已渲染完成（如异步初始化）
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      initProgressLine();
    } else {
      // 场景2：DOM未渲染完成，先等 DOMContentLoaded
      document.addEventListener('DOMContentLoaded', initProgressLine);
    }

    // 场景3：资源加载完成后，再更新一次（应对图片等资源加载后布局变化）
    window.addEventListener('load', initProgressLine);
    
    // 场景4：窗口大小变化时更新（保持原有逻辑）
    window.addEventListener('resize', () => {
      this.updateProgressLineHeight();
    });
    
    // 触发滚动事件，初始化导航状态（保持原有逻辑）
    window.dispatchEvent(new Event('scroll'));
  }
}

// ------------- 公共类调用示例 -------------
document.addEventListener('DOMContentLoaded', function() {
  // 1. 创建实例（默认配置）
//   const progressNav1 = new ProgressNav();
//   progressNav1.init();

  // 2. 创建实例（自定义配置，支持多实例共存）
  // const progressNav2 = new ProgressNav({
  //   scrollThreshold: 0.4,
  //   activeClass: 'my-active',
  //   completedClass: 'my-completed'
  // });
  // progressNav2.init();
});