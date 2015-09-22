'use strict';

function _init() {
	$.GameSetMatch.layout = {
		activate: function() {
			var a = this;
			a.fix(), a.fixSidebar(), $(window, '.wrapper').resize(function() {
				a.fix(), a.fixSidebar()
			})
		},
		fix: function() {
			var a = $('.main-header').outerHeight() + $('.main-footer').outerHeight(),
				b = $(window).height(),
				c = $('.sidebar').height();
			if ($('body').hasClass('fixed')) $('.content-wrapper, .right-side').css('min-height', b - $('.main-footer').outerHeight());
			else {
				var d;
				b >= c ? ($('.content-wrapper, .right-side').css('min-height', b - a), d = b - a) : ($('.content-wrapper, .right-side').css('min-height', c), d = c);
				var e = $($.GameSetMatch.options.controlSidebarOptions.selector);
				'undefined' != typeof e && e.height() > d && $('.content-wrapper, .right-side').css('min-height', e.height())
			}
		},
		fixSidebar: function() {
			return $('body').hasClass('fixed') ? ('undefined' == typeof $.fn.slimScroll && window.console && window.console.error('Error: the fixed layout requires the slimscroll plugin!'), void($.GameSetMatch.options.sidebarSlimScroll && 'undefined' != typeof $.fn.slimScroll && ($('.sidebar').slimScroll({
				destroy: !0
			}).height('auto'), $('.sidebar').slimscroll({
				height: $(window).height() - $('.main-header').height() + 'px',
				color: 'rgba(0,0,0,0.2)',
				size: '3px'
			})))) : void('undefined' != typeof $.fn.slimScroll && $('.sidebar').slimScroll({
				destroy: !0
			}).height('auto'))
		}
	}, $.GameSetMatch.pushMenu = {
		activate: function(a) {
			var b = $.GameSetMatch.options.screenSizes;
			$(a).on('click', function(a) {
				a.preventDefault(), $(window).width() > b.sm - 1 ? $('body').hasClass('sidebar-collapse') ? $('body').removeClass('sidebar-collapse').trigger('expanded.pushMenu') : $('body').addClass('sidebar-collapse').trigger('collapsed.pushMenu') : $('body').hasClass('sidebar-open') ? $('body').removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu') : $('body').addClass('sidebar-open').trigger('expanded.pushMenu')
			}), $('.content-wrapper').click(function() {
				$(window).width() <= b.sm - 1 && $('body').hasClass('sidebar-open') && $('body').removeClass('sidebar-open')
			}), ($.GameSetMatch.options.sidebarExpandOnHover || $('body').hasClass('fixed') && $('body').hasClass('sidebar-mini')) && this.expandOnHover()
		},
		expandOnHover: function() {
			var a = this,
				b = $.GameSetMatch.options.screenSizes.sm - 1;
			$('.main-sidebar').hover(function() {
				$('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-collapse') && $(window).width() > b && a.expand()
			}, function() {
				$('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-expanded-on-hover') && $(window).width() > b && a.collapse()
			})
		},
		expand: function() {
			$('body').removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover')
		},
		collapse: function() {
			$('body').hasClass('sidebar-expanded-on-hover') && $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse')
		}
	}, $.GameSetMatch.tree = function(a) {
		var b = this,
			c = $.GameSetMatch.options.animationSpeed;
		$(document).on('click', a + ' li a', function(a) {
			var d = $(this),
				e = d.next();
			if (e.is('.treeview-menu') && e.is(':visible')) e.slideUp(c, function() {
				e.removeClass('menu-open')
			}), e.parent('li').removeClass('active');
			else if (e.is('.treeview-menu') && !e.is(':visible')) {
				var f = d.parents('ul').first(),
					g = f.find('ul:visible').slideUp(c);
				g.removeClass('menu-open');
				var h = d.parent('li');
				e.slideDown(c, function() {
					e.addClass('menu-open'), f.find('li.active').removeClass('active'), h.addClass('active'), b.layout.fix()
				})
			}
			e.is('.treeview-menu') && a.preventDefault()
		})
	}, $.GameSetMatch.lineChart = function() {
		var sin = [], cos = [];
		for (var i = 0; i < 14; i += 0.5) {
			sin.push([i, Math.sin(i)]);
			cos.push([i, Math.cos(i)]);
		}
		var line_data1 = {
			data: sin,
			color: '#3c8dbc'
		};
		var line_data2 = {
			data: cos,
			color: '#00c0ef'
		};
		$.plot('#line-chart', [line_data1, line_data2], {
			grid: {
				hoverable: true,
				borderColor: '#f3f3f3',
				borderWidth: 1,
				tickColor: '#f3f3f3'
			},
			series: {
				shadowSize: 0,
				lines: {
					show: true
				},
				points: {
					show: true
				}
			},
			lines: {
				fill: false,
				color: ['#3c8dbc', '#f56954']
			},
			yaxis: {
				show: true,
			},
			xaxis: {
				show: true
			}
		});
		//Initialize tooltip on hover
		$('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
			position: 'absolute',
			display: 'none',
			opacity: 0.8
		}).appendTo('body');

		$('#line-chart').bind('plothover', function(event, pos, item) {

			if (item) {
				var x = item.datapoint[0].toFixed(2),
						y = item.datapoint[1].toFixed(2);

				$('#line-chart-tooltip').html(item.series.label + ' of ' + x + ' = ' + y)
					.css({top: item.pageY + 5, left: item.pageX + 5})
					.fadeIn(200);
			} else {
				$('#line-chart-tooltip').hide();
			}
		});
 	}, $.GameSetMatch.controlSidebar = {
		activate: function() {
			var a = this,
				b = $.GameSetMatch.options.controlSidebarOptions,
				c = $(b.selector),
				d = $(b.toggleBtnSelector);
			d.on('click', function(d) {
				d.preventDefault(), c.hasClass('control-sidebar-open') || $('body').hasClass('control-sidebar-open') ? a.close(c, b.slide) : a.open(c, b.slide)
			});
			var e = $('.control-sidebar-bg');
			a._fix(e), $('body').hasClass('fixed') ? a._fixForFixed(c) : $('.content-wrapper, .right-side').height() < c.height() && a._fixForContent(c)
		},
		open: function(a, b) {
			b ? a.addClass('control-sidebar-open') : $('body').addClass('control-sidebar-open')
		},
		close: function(a, b) {
			b ? a.removeClass('control-sidebar-open') : $('body').removeClass('control-sidebar-open')
		},
		_fix: function(a) {
			var b = this;
			$('body').hasClass('layout-boxed') ? (a.css('position', 'absolute'), a.height($('.wrapper').height()), $(window).resize(function() {
				b._fix(a)
			})) : a.css({
				position: 'fixed',
				height: 'auto'
			})
		},
		_fixForFixed: function(a) {
			a.css({
				position: 'fixed',
				'max-height': '100%',
				overflow: 'auto',
				'padding-bottom': '50px'
			})
		},
		_fixForContent: function(a) {
			$('.content-wrapper, .right-side').css('min-height', a.height())
		}
	}, $.GameSetMatch.boxWidget = {
		selectors: $.GameSetMatch.options.boxWidgetOptions.boxWidgetSelectors,
		icons: $.GameSetMatch.options.boxWidgetOptions.boxWidgetIcons,
		animationSpeed: $.GameSetMatch.options.animationSpeed,
		activate: function(a) {
			var b = this;
			a || (a = document), $(a).on('click', b.selectors.collapse, function(a) {
				a.preventDefault(), b.collapse($(this))
			}), $(a).on('click', b.selectors.remove, function(a) {
				a.preventDefault(), b.remove($(this))
			})
		},
		collapse: function(a) {
			var b = this,
				c = a.parents('.box').first(),
				d = c.find('> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer');
			c.hasClass('collapsed-box') ? (a.children(':first').removeClass(b.icons.open).addClass(b.icons.collapse), d.slideDown(b.animationSpeed, function() {
				c.removeClass('collapsed-box')
			})) : (a.children(':first').removeClass(b.icons.collapse).addClass(b.icons.open), d.slideUp(b.animationSpeed, function() {
				c.addClass('collapsed-box')
			}))
		},
		remove: function(a) {
			var b = a.parents('.box').first();
			b.slideUp(this.animationSpeed)
		}
	}
}

if ('undefined' == typeof jQuery) throw new Error('GameSetMatch requires jQuery');
$.GameSetMatch = {}, $.GameSetMatch.options = {
		navbarMenuSlimscroll: !0,
		navbarMenuSlimscrollWidth: '3px',
		navbarMenuHeight: '200px',
		animationSpeed: 500,
		sidebarToggleSelector: '[data-toggle="offcanvas"]',
		sidebarPushMenu: !0,
		sidebarSlimScroll: !0,
		sidebarExpandOnHover: !1,
		enableBoxRefresh: !0,
		enableBSToppltip: !0,
		BSTooltipSelector: '[data-toggle="tooltip"]',
		enableFastclick: !0,
		enableControlSidebar: !0,
		controlSidebarOptions: {
			toggleBtnSelector: '[data-toggle="control-sidebar"]',
			selector: '.control-sidebar',
			slide: !0
		},
		enableBoxWidget: !0,
		boxWidgetOptions: {
			boxWidgetIcons: {
				collapse: 'fa-minus',
				open: 'fa-plus',
				remove: 'fa-times'
			},
			boxWidgetSelectors: {
				remove: '[data-widget="remove"]',
				collapse: '[data-widget="collapse"]'
			}
		},
		directChat: {
			enable: !0,
			contactToggleSelector: '[data-widget="chat-pane-toggle"]'
		},
		colors: {
			lightBlue: '#3c8dbc',
			red: '#f56954',
			green: '#00a65a',
			aqua: '#00c0ef',
			yellow: '#f39c12',
			blue: '#0073b7',
			navy: '#001F3F',
			teal: '#39CCCC',
			olive: '#3D9970',
			lime: '#01FF70',
			orange: '#FF851B',
			fuchsia: '#F012BE',
			purple: '#8E24AA',
			maroon: '#D81B60',
			black: '#222222',
			gray: '#d2d6de'
		},
		screenSizes: {
			xs: 480,
			sm: 768,
			md: 992,
			lg: 1200
		}
	}, $(function() {
		'use strict';
		$('body').removeClass('hold-transition'), 'undefined' != typeof GameSetMatchOptions && $.extend(!0, $.GameSetMatch.options, GameSetMatchOptions);
		var a = $.GameSetMatch.options;
		_init(), $.GameSetMatch.layout.activate(), $.GameSetMatch.tree('.sidebar'), a.enableControlSidebar && $.GameSetMatch.controlSidebar.activate(), a.navbarMenuSlimscroll && 'undefined' != typeof $.fn.slimscroll && $('.navbar .menu').slimscroll({
			height: a.navbarMenuHeight,
			alwaysVisible: !1,
			size: a.navbarMenuSlimscrollWidth
		}).css('width', '100%'), a.sidebarPushMenu && $.GameSetMatch.pushMenu.activate(a.sidebarToggleSelector), a.enableBSToppltip && $('body').tooltip({
			selector: a.BSTooltipSelector
		}), a.enableBoxWidget && $.GameSetMatch.boxWidget.activate(), a.enableFastclick && 'undefined' != typeof FastClick && FastClick.attach(document.body), a.directChat.enable && $(document).on('click', a.directChat.contactToggleSelector, function() {
			var a = $(this).parents('.direct-chat').first();
			a.toggleClass('direct-chat-contacts-open')
		}), $('.btn-group[data-toggle="btn-toggle"]').each(function() {
			var a = $(this);
			$(this).find('.btn').on('click', function(b) {
				a.find('.btn.active').removeClass('active'), $(this).addClass('active'), b.preventDefault()
			})
		})
	}),
	function(a) {
		'use strict';
		a.fn.boxRefresh = function(b) {
			function c(a) {
				a.append(f), e.onLoadStart.call(a)
			}

			function d(a) {
				a.find(f).remove(), e.onLoadDone.call(a)
			}
			var e = a.extend({
					trigger: '.refresh-btn',
					source: '',
					onLoadStart: function(a) {
						return a
					},
					onLoadDone: function(a) {
						return a
					}
				}, b),
				f = a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
			return this.each(function() {
				if ('' === e.source) return void(window.console && window.console.log('Please specify a source first - boxRefresh()'));
				var b = a(this),
					f = b.find(e.trigger).first();
				f.on('click', function(a) {
					a.preventDefault(), c(b), b.find('.box-body').load(e.source, function() {
						d(b)
					})
				})
			})
		}
	}(jQuery),
	function(a) {
		'use strict';
		a.fn.activateBox = function() {
			a.GameSetMatch.boxWidget.activate(this)
		}
	}(jQuery),
	function(a) {
		'use strict';
		a.fn.todolist = function(b) {
			var c = a.extend({
				onCheck: function(a) {
					return a
				},
				onUncheck: function(a) {
					return a
				}
			}, b);
			return this.each(function() {
				'undefined' != typeof a.fn.iCheck ? (a('input', this).on('ifChecked', function() {
					var b = a(this).parents('li').first();
					b.toggleClass('done'), c.onCheck.call(b)
				}), a('input', this).on('ifUnchecked', function() {
					var b = a(this).parents('li').first();
					b.toggleClass('done'), c.onUncheck.call(b)
				})) : a('input', this).on('change', function() {
					var b = a(this).parents('li').first();
					b.toggleClass('done'), a('input', b).is(':checked') ? c.onCheck.call(b) : c.onUncheck.call(b)
				})
			})
		}
	}(jQuery);

console.log('===== $.GameSetMatch: ', $.GameSetMatch);
