; (function ($) {
    $(function () {
        var win = $(window).width();
        //IE9 브라우저 핵 css 추가
        if (getInternetExplorerVersion() == 9) $("body").addClass('ie9');
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            $("body").addClass('chrome');
        }
        //온로드 실행
        $(document).on('click', '[data-select=btn-open]', function () {
            uiSelect(this);
        });
        $(document).on('click', '.form-global-search > a, .form-global-search > label', function () {
            uiSearch(this);
            return false;
        });
        /*
		if ($('.form-global-search').length > 0) {
			uiSearchInt($(window).width());
		}
		*/

        if ($('.btn-allmenu').length > 0) uiNavi();
        if ($('.banner-txt').length > 0) uiBanInt();
        //if ($('#tabSelect').length > 0) uiTabSelect(win);
        if ($('[data-column=wrap]').length > 0) uiColumn();
        if ($('.input-txt').length > 0) uiInputEnt();
        /*if ($('.select-type02').length > 0) uiSelectEnt(); 삭제*/
        if ($('.input-file').length > 0) uiFormFile();
        if ($('input').hasClass('input-date')) uiDatePicker();
        if ($('input').hasClass('input-date-month')) uiMonthDatePicker();
        if ($('.ui-toggle').length > 0) uiToggle();
        //if ($('.list-type06').length > 0) uiDeleteSwipe(win);
        if ($('[data-close]').length > 0) uiClose();
        if ($('.landing-slider').length > 0) uiLandingSlider();
        if ($('.CapsLockDetect').length > 0) uiCapsLockDetecting();
        $(window).resize(function () {
            win = $(window).width();
            //if ($('#tabSelect').length > 0) uiTabSelect(win);
            if ($('[data-column=wrap]').length > 0) uiColumn();
            //if ($('.list-type06').length > 0) uiDeleteSwipe(win)
        });
        uiForm();
    });
    //// .val event 시 label 겹치는 문제 수정 - 테스트중
    //var originalVal = $.fn.val;
    //$.fn.val = function (value) {
    //    //$(e).val()
    //    if (value == null)
    //    {
    //        return originalVal.call(this);
    //    }
    //    //$(e).val(value);
    //    if ($(this).parent().hasClass("input-txt")) {
    //        return originalVal.call(this, value).trigger("keyup");
    //    }
    //    return originalVal.call(this, value);
    //};
})(jQuery);

/**************************************
	UI Common Form 
**************************************/
function uiForm() {

    var radioForm = 'input[type=radio]';
    var checkForm = 'input[type=checkbox]';

    /* 라디오버튼 */
    $(radioForm).each(function () {
        var labelFor = $(this).attr('id');

        if ($(this).prop('checked') == true) {
            $('[for="' + labelFor + '"]').addClass('check');
            if ($(this).prop('disabled') == true) {
                $(this).parent().addClass('disabled');
            }
        }
        else {
            $('[for="' + labelFor + '"]').removeClass('check');
        }

        if ($(this).prop('disabled') == true) {
            $(this).parent().addClass('disabled');
        }
        else {
            $(this).parent().removeClass('disabled');
        }
    });

    $(document).on('click', radioForm, function () {
        var labelFor = $(this).attr('id');
        var n = $(this).attr('name');
        $('[name="' + n + '"]').prev().removeClass('check');
        $('[data-label="' + n + '"]').removeClass('check');
        $('[for="' + labelFor + '"]').addClass('check');
    });

    /* 체크박스 */
    $(checkForm).each(function () {
        if ($(this).prop('checked') == true) {
            var labelFor = $(this).attr('id');
            $('[for="' + labelFor + '"]').addClass('check');
            if ($(this).prop('disabled') == true) $('[for="' + labelFor + '"]').parent().addClass('disabled');
        } else if ($(this).prop('disabled') == true) {
            var labelFor = $(this).attr('id');
            $('[for="' + labelFor + '"]').parent().addClass('disabled');
        } else {
            var labelFor = $(this).attr('id');
            $('[for="' + labelFor + '"]').removeClass('check');
        }
    });
    $(document).on('click', checkForm, function () {
        var labelFor = $(this).attr('id');
        if ($(this).prop('checked') == true) $('[for="' + labelFor + '"]').addClass('check');
        else $('[for="' + labelFor + '"]').removeClass('check');
    });
}

/****************************************
	UI FORM FILE
****************************************/
function uiFormFile() {
    $('.input-file').each(function () {
        var a = $(this).find(' > label');
        var b = $(this).find(' > input');
        var c = $(this).find(' > span');
        if (c.text() != '') a.find('>span').hide();
        b.on('change', function () {
            var fileVal = $(this).val().split('\\');
            var fileName = fileVal[(fileVal.length - 1)];
            c.text(fileName);
            if (fileName.length > 0) a.find('>span').hide();
            else a.find('>span').show();
        });
    });
}

/**************************************
	UI DatePicker
**************************************/
function uiDatePicker() {
    $(".input-date").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        dateFormat: 'yy-mm-dd'
    });
}

function uiMonthDatePicker(options) {
    if (typeof options == "undefined") {
        var today = new Date();

        options = {
            pattern: 'yyyy-mm',
            startYear: 2015,
            finalYear: today.getFullYear().toString(),
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        };
    }
    $(".input-date-month").monthpicker(options);
}

/****************************************
	UI Input Event
****************************************/
function uiInputEnt() {
    $('.input-txt').each(function (i) {
        var a = $('.input-txt').eq(i);
        var b = a.find('input:not([type=hidden]):not([type=checkbox]):not(.input-date):not([readonly=readonly])');
        var c;
        var d = '';
        if (b.next('button').length == 0) {
            b.after('<button type="button" class="btn-delete" tabindex="-1">삭제</button>')
        };
        c = a.find('input').next('button');

        if (b.val() == '') {
            a.removeClass('s1 access')
        } else {
            a.addClass('s1 access');
            //d = b.val();
        }

        if (b.prop('disabled') == true || b.prop('readonly')) {
            a.addClass('disabled');
        }
        else {
            a.removeClass('disabled');
        }
        b.on('focus', function () {
            if ($(this).prop('disabled') != true && $(this).prop('readonly') != true) a.addClass('focus');
        }).on('blur', function () {
            if ($(this).val() == '') {
                if (d != '') {
                    a.addClass('s1').removeClass('focus access')
                    b.val(d)
                } else {
                    if ($(this).prop('disabled') != true && $(this).prop('readonly') != true) a.removeClass('focus s1 error access'); //상태값에 따라 Class제어 2017/12/11
                }
            } else {
                a.addClass('s1').removeClass('focus')
            }
        }).on('keyup', function () {
            if ($(this).val() == '') {
                a.removeClass('access');
            } else {
                a.addClass('access');
                if ($('#sp' + this.id).length > 0) {
                    $('#sp' + this.id).hide();
                }
            }
        });
        c.on('focus click', function () {
            b.val('').focus();
        }).on('blur', function () {
            a.addClass('s1').removeClass('focus');
        });
    });
}

/****************************************
	UI Select Event
****************************************/
function uiSelectEnt() {
    $('.select-type02').each(function (i) {
        var a = $('.select-type02').eq(i);
        if (a.find('option:selected').hasClass('sel-tit') || a.find('option:selected').val() == "") a.addClass('off');
        a.change(function () {
            a.removeClass('off')
            if (a.find('option:selected').hasClass('sel-tit') || a.find('option:selected').val() == "") a.addClass('off');

        });
    })
}

/**************************************
	UI MultipleSelect
**************************************/
/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.1.0
 *
 * http://wenzhixin.net.cn/p/multiple-select/
 */

(function ($) {

    'use strict';

    function MultipleSelect($el, options) {
        var that = this,
            name = $el.attr('name') || options.name || ''

        var originalParentStyle = $el.parent().attr('style') || '';
        $el.parent().hide();
        var elWidth = $el.css("width");
        $el.parent().show().attr('style', originalParentStyle);
        if (elWidth == "0px") { elWidth = $el.outerWidth() + 20 }

        this.$el = $el.hide();
        this.options = options;
        this.$parent = $('<div' + $.map(['class', 'title'], function (att) {
            var attValue = that.$el.attr(att) || '';
            attValue = (att === 'class' ? ('ms-parent' + (attValue ? ' ' : '')) : '') + attValue;
            return attValue ? (' ' + att + '="' + attValue + '"') : '';
        }).join('') + ' />');
        this.$choice = $('<button type="button" class="ms-choice"><span class="placeholder">' +
            options.placeholder + '</span><div></div></button>');
        this.$drop = $('<div class="ms-drop ' + options.position + '"></div>');
        this.$el.after(this.$parent);
        this.$parent.append(this.$choice);
        this.$parent.append(this.$drop);

        if (this.$el.prop('disabled')) {
            this.$choice.addClass('disabled');
        }
        this.$parent.css('width', options.width || elWidth);

        if (!this.options.keepOpen) {
            $('body').click(function (e) {
                if ($(e.target)[0] === that.$choice[0] ||
                    $(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
                    return;
                }
                if (($(e.target)[0] === that.$drop[0] ||
                    $(e.target).parents('.ms-drop')[0] !== that.$drop[0]) &&
                    that.options.isOpen) {
                    that.close();
                }
            });
        }

        this.selectAllName = 'name="selectAll' + name + '"';
        this.selectGroupName = 'name="selectGroup' + name + '"';
        this.selectItemName = 'name="selectItem' + name + '"';
    }

    MultipleSelect.prototype = {
        constructor: MultipleSelect,

        init: function () {
            var that = this;
            if (this.options.filter) {
                this.$drop.append(
                    '<div class="ms-search">',
                    '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">',
                    '</div>'
                );
            }
            var ul = $('<ul></ul>');
            if (this.options.selectAll && !this.options.single) {
                ul.append(
                    '<li class="ms-select-all">' +
                    '<label>' +
                    '<input type="checkbox" ' + this.selectAllName + ' /> ' +
                    this.options.selectAllDelimiter[0] + this.options.selectAllText + this.options.selectAllDelimiter[1] +
                    '</label>' +
                    '</li>'
                );
            }
            $.each(this.$el.children(), function (i, elm) {
                ul.append(that.optionToHtml(i, elm));
            });
            ul.append('<li class="ms-no-results">' + this.options.noMatchesFound + '</li>');
            this.$drop.append(ul);

            this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
            this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');

            this.$searchInput = this.$drop.find('.ms-search input');
            this.$selectAll = this.$drop.find('input[' + this.selectAllName + ']');
            this.$selectGroups = this.$drop.find('input[' + this.selectGroupName + ']');
            this.$selectItems = this.$drop.find('input[' + this.selectItemName + ']:enabled');
            this.$disableItems = this.$drop.find('input[' + this.selectItemName + ']:disabled');
            this.$noResults = this.$drop.find('.ms-no-results');
            this.events();
            this.updateSelectAll(true);
            this.update(true);

            if (this.options.isOpen) {
                this.open();
            }
        },

        optionToHtml: function (i, elm, group, groupDisabled) {
            var that = this,
                $elm = $(elm),
                multiple = this.options.multiple,
                optAttributesToCopy = ['class', 'title'],
                clss = $.map(optAttributesToCopy, function (att, i) {
                    var isMultiple = att === 'class' && multiple;
                    var attValue = $elm.attr(att) || '';
                    return (isMultiple || attValue) ?
                        (' ' + att + '="' + (isMultiple ? ('multiple' + (attValue ? ' ' : '')) : '') + attValue + '"') :
                        '';
                }).join(''),
                disabled,
                type = this.options.single ? 'radio' : 'checkbox';

            if ($elm.is('option')) {
                var value = $elm.val(),
                    text = that.options.textTemplate($elm),
                    selected = $elm.prop('selected'),
                    style = this.options.styler(value) ? ' style="' + this.options.styler(value) + '"' : '';

                disabled = groupDisabled || $elm.prop('disabled');
                if ((this.options.blockSeparator > "") && (this.options.blockSeparator == $elm.val())) {
                    var li = $(
                        '<li' + clss + style + '>',
                        '<label class="' + this.options.blockSeparator + (disabled ? 'disabled' : '') + '">',
                        '</label>',
                        '</li>'
                    );
                    li.find('label').append(document.createTextNode(text));
                    return li;
                } else {
                    var li = $(
                        '<li' + clss + style + '>' +
                        '<label' + (disabled ? ' class="disabled"' : '') + '>' +
                        '<input type="' + type + '" ' + this.selectItemName +
                            (selected ? ' checked="checked"' : '') +
                            (disabled ? ' disabled="disabled"' : '') +
                            (group ? ' data-group="' + group + '"' : '') +
                            '/> ' +
                        '</label>' +
                        '</li>');
                    li.find('input').val(value);
                    li.find('label').append(document.createTextNode(text));
                    return li;
                }
            } else if (!group && $elm.is('optgroup')) {
                var _group = 'group_' + i,
                    label = $elm.attr('label');

                disabled = $elm.prop('disabled');
                var group = $('<div/>');
                group.append(
                    '<li class="group">' +
                    '<label class="optgroup' + (disabled ? ' disabled' : '') + '" data-group="' + _group + '">' +
                    (this.options.hideOptgroupCheckboxes ? '' : '<input type="checkbox" ' + this.selectGroupName +
                        (disabled ? ' disabled="disabled"' : '') + ' /> ') +
                    label +
                    '</label>' +
                    '</li>');
                li.find('label').append(document.createTextNode(text));
                $.each($elm.children(), function (i, elm) {
                    group.append(that.optionToHtml(i, elm, _group, disabled));
                });
                return group.html();
            }
        },

        events: function () {
            var that = this;

            function toggleOpen(e) {
                e.preventDefault();
                that[that.options.isOpen ? 'close' : 'open']();
            }

            var label = this.$el.parent().closest('label')[0] || $('label[for=' + this.$el.attr('id').split(':').join('\\:') + ']')[0];

            if (label) {
                $(label).off('click').on('click', function (e) {
                    if (e.target.nodeName.toLowerCase() !== 'label' || e.target !== this) {
                        return;
                    }
                    toggleOpen(e);
                    if (!that.options.filter || !that.options.isOpen) {
                        that.focus();
                    }
                    e.stopPropagation(); // Causes lost focus otherwise
                });
            }
            this.$choice.off('click').on('click', toggleOpen)
                .off('focus').on('focus', this.options.onFocus)
                .off('blur').on('blur', this.options.onBlur);

            this.$parent.off('keydown').on('keydown', function (e) {
                switch (e.which) {
                    case 27: // esc key
                        that.close();
                        that.$choice.focus();
                        break;
                }
            });
            this.$searchInput.off('keydown').on('keydown', function (e) {
                if (e.keyCode === 9 && e.shiftKey) { // Ensure shift-tab causes lost focus from filter as with clicking away
                    that.close();
                }
            }).off('keyup').on('keyup', function (e) {
                if (that.options.filterAcceptOnEnter &&
                    (e.which === 13 || e.which == 32) && // enter or space
                    that.$searchInput.val() // Avoid selecting/deselecting if no choices made
                    ) {
                    that.$selectAll.click();
                    that.close();
                    that.focus();
                    return;
                }
                that.filter();
            });
            this.$selectAll.off('click').on('click', function () {
                var checked = $(this).prop('checked'),
                    $items = that.$selectItems.filter(':visible');
                if ($items.length === that.$selectItems.length) {
                    that[checked ? 'checkAll' : 'uncheckAll']();
                } else { // when the filter option is true
                    that.$selectGroups.prop('checked', checked);
                    $items.prop('checked', checked);
                    that.options[checked ? 'onCheckAll' : 'onUncheckAll']();
                    that.update();
                }
            });
            this.$selectGroups.off('click').on('click', function () {
                var group = $(this).parent().attr('data-group'),
                    $items = that.$selectItems.filter(':visible'),
                    $children = $items.filter('[data-group="' + group + '"]'),
                    checked = $children.length !== $children.filter(':checked').length;
                $children.prop('checked', checked);
                that.updateSelectAll();
                that.update();
                that.options.onOptgroupClick({
                    label: $(this).parent().text(),
                    checked: checked,
                    children: $children.get()
                });
            });
            this.$selectItems.off('click').on('click', function () {
                that.updateSelectAll();
                that.update();
                that.updateOptGroupSelect();
                that.options.onClick({
                    label: $(this).parent().text(),
                    value: $(this).val(),
                    checked: $(this).prop('checked')
                });

                if (that.options.single && that.options.isOpen && !that.options.keepOpen) {
                    that.close();
                }
            });
        },

        open: function () {
            if (this.$choice.hasClass('disabled')) {
                return;
            }
            this.options.isOpen = true;
            this.$choice.find('>div').addClass('open');
            this.$drop.show();

            // fix filter bug: no results show
            this.$selectAll.parent().show();
            this.$noResults.hide();

            // Fix #77: 'All selected' when no options
            if (this.$el.children().length === 0) {
                this.$selectAll.parent().hide();
                this.$noResults.show();
            }

            if (this.options.container) {
                var offset = this.$drop.offset();
                this.$drop.appendTo($(this.options.container));
                this.$drop.offset({ top: offset.top, left: offset.left });
            }
            if (this.options.filter) {
                this.$searchInput.val('');
                this.$searchInput.focus();
                this.filter();
            }
            this.options.onOpen();
        },

        close: function () {
            this.options.isOpen = false;
            this.$choice.find('>div').removeClass('open');
            this.$drop.hide();
            if (this.options.container) {
                this.$parent.append(this.$drop);
                this.$drop.css({
                    'top': 'auto',
                    'left': 'auto'
                });
            }
            this.options.onClose();
        },

        update: function (isInit) {
            var selects = this.getSelects(),
                $span = this.$choice.find('>span');

            if (selects.length === 0) {
                $span.addClass('placeholder').html(this.options.placeholder);
            } else if (this.options.countSelected && selects.length < this.options.minimumCountSelected) {
                $span.removeClass('placeholder').text(
                    (this.options.displayValues ? selects : this.getSelects('text'))
                        .join(this.options.delimiter));
            } else if (this.options.allSelected &&
                selects.length === this.$selectItems.length + this.$disableItems.length) {
                $span.removeClass('placeholder').html(this.options.allSelected);
            } else if ((this.options.countSelected || this.options.etcaetera) && selects.length > this.options.minimumCountSelected) {
                if (this.options.etcaetera) {
                    $span.removeClass('placeholder').text((this.options.displayValues ? selects : this.getSelects('text').slice(0, this.options.minimumCountSelected)).join(this.options.delimiter) + '...');
                }
                else {
                    $span.removeClass('placeholder').html(this.options.countSelected
                        .replace('#', selects.length)
                        .replace('%', this.$selectItems.length + this.$disableItems.length));
                }
            } else {
                $span.removeClass('placeholder').text(
                    (this.options.displayValues ? selects : this.getSelects('text'))
                        .join(this.options.delimiter));
            }
            if (this.options.addTitle)
                $span.prop('title', this.getSelects('text'));

            // set selects to select
            this.$el.val(this.getSelects());

            // add selected class to selected li
            this.$drop.find('li').removeClass('selected');
            this.$drop.find('input[' + this.selectItemName + ']:checked').each(function () {
                $(this).parents('li').first().addClass('selected');
            });

            if ($("input[name=selectAll]").is(":checked")) $(".ms-select-all").addClass('selected');
            else $(".ms-select-all").removeClass('selected');

            // trigger <select> change event
            if (!isInit) {
                this.$el.trigger('change');
            }
        },

        updateSelectAll: function (Init) {
            var $items = this.$selectItems;
            if (!Init) { $items = $items.filter(':visible'); }
            this.$selectAll.prop('checked', $items.length &&
                $items.length === $items.filter(':checked').length);
            if (this.$selectAll.prop('checked')) {
                this.options.onCheckAll();
            }
        },

        updateOptGroupSelect: function () {
            var $items = this.$selectItems.filter(':visible');
            $.each(this.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = $items.filter('[data-group="' + group + '"]');
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });
        },

        //value or text, default: 'value'
        getSelects: function (type) {
            var that = this,
                texts = [],
                values = [];
            this.$drop.find('input[' + this.selectItemName + ']:checked').each(function () {
                texts.push($(this).parents('li').first().text());
                values.push($(this).val());
            });

            if (type === 'text' && this.$selectGroups.length) {
                texts = [];
                this.$selectGroups.each(function () {
                    var html = [],
                        text = $.trim($(this).parent().text()),
                        group = $(this).parent().data('group'),
                        $children = that.$drop.find('[' + that.selectItemName + '][data-group="' + group + '"]'),
                        $selected = $children.filter(':checked');

                    if ($selected.length === 0) {
                        return;
                    }

                    html.push('[');
                    html.push(text);
                    if ($children.length > $selected.length) {
                        var list = [];
                        $selected.each(function () {
                            list.push($(this).parent().text());
                        });
                        html.push(': ' + list.join(', '));
                    }
                    html.push(']');
                    texts.push(html.join(''));
                });
            }
            return type === 'text' ? texts : values;
        },

        setSelects: function (values) {
            var that = this;
            this.$selectItems.prop('checked', false);
            $.each(values, function (i, value) {
                that.$selectItems.filter('[value="' + value + '"]').prop('checked', true);
            });
            this.$selectAll.prop('checked', this.$selectItems.length ===
                this.$selectItems.filter(':checked').length);
            this.update();
        },

        enable: function () {
            this.$choice.removeClass('disabled');
        },

        disable: function () {
            this.$choice.addClass('disabled');
        },

        checkAll: function () {
            this.$selectItems.prop('checked', true);
            this.$selectGroups.prop('checked', true);
            this.$selectAll.prop('checked', true);
            this.update();
            this.options.onCheckAll();
        },

        uncheckAll: function () {
            this.$selectItems.prop('checked', false);
            this.$selectGroups.prop('checked', false);
            this.$selectAll.prop('checked', false);
            this.update();
            this.options.onUncheckAll();
        },

        focus: function () {
            this.$choice.focus();
            this.options.onFocus();
        },

        blur: function () {
            this.$choice.blur();
            this.options.onBlur();
        },

        refresh: function () {
            this.init();
        },

        filter: function () {
            var that = this,
                text = $.trim(this.$searchInput.val()).toLowerCase();
            if (text.length === 0) {
                this.$selectItems.parent().show();
                this.$disableItems.parent().show();
                this.$selectGroups.parent().show();
            } else {
                this.$selectItems.each(function () {
                    var $parent = $(this).parent();
                    $parent[$parent.text().toLowerCase().indexOf(text) < 0 ? 'hide' : 'show']();
                });
                this.$disableItems.parent().hide();
                this.$selectGroups.each(function () {
                    var $parent = $(this).parent();
                    var group = $parent.attr('data-group'),
                        $items = that.$selectItems.filter(':visible');
                    $parent[$items.filter('[data-group="' + group + '"]').length === 0 ? 'hide' : 'show']();
                });

                //Check if no matches found
                if (this.$selectItems.filter(':visible').length) {
                    this.$selectAll.parent().show();
                    this.$noResults.hide();
                } else {
                    this.$selectAll.parent().hide();
                    this.$noResults.show();
                }
            }
            this.updateOptGroupSelect();
            this.updateSelectAll();
        }
    };

    $.fn.multipleSelect = function () {
        var option = arguments[0],
            args = arguments,

            value,
            allowedMethods = [
                'getSelects', 'setSelects',
                'enable', 'disable',
                'checkAll', 'uncheckAll',
                'focus', 'blur',
                'refresh', 'close'
            ];

        this.each(function () {
            var $this = $(this),
                data = $this.data('multipleSelect'),
                options = $.extend({}, $.fn.multipleSelect.defaults,
                    $this.data(), typeof option === 'object' && option);

            if (!data) {
                data = new MultipleSelect($this, options);
                $this.data('multipleSelect', data);
            }

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw "Unknown method: " + option;
                }
                value = data[option](args[1]);
            } else {
                data.init();
                if (args[1]) {
                    value = data[args[1]].apply(data, [].slice.call(args, 2));
                }
            }
        });

        return value ? value : this;
    };

    $.fn.multipleSelect.defaults = {
        name: '',
        isOpen: false,
        placeholder: '',
        selectAll: true,
        selectAllText: 'Select all',
        selectAllDelimiter: ['[', ']'],
        allSelected: 'All selected',
        minimumCountSelected: 1,
        countSelected: '# of % selected',
        noMatchesFound: 'No matches found',
        multiple: false,
        multipleWidth: 80,
        single: false,
        filter: false,
        width: undefined,
        maxHeight: 250,
        container: null,
        position: 'bottom',
        keepOpen: false,
        blockSeparator: '',
        displayValues: false,
        delimiter: ', ',
        addTitle: false,

        styler: function () {
            return false;
        },
        textTemplate: function ($elm) {
            return $elm.text();
        },

        onOpen: function () {
            return false;
        },
        onClose: function () {
            return false;
        },
        onCheckAll: function () {
            $("input[name=selectAll]").prop("checked", "checked");
            return false;
        },
        onUncheckAll: function () {
            $("input[name=selectAll]").prop("checked", "checked");
            return false;
        },
        onFocus: function () {
            return false;
        },
        onBlur: function () {
            return false;
        },
        onOptgroupClick: function () {
            return false;
        },
        onClick: function () {
            return false;
        }
    };
})(jQuery);

/****************************************
	통합 검색
****************************************/
function uiSearchInt(win) {
    var el;
    if (win > 768) {
        el = ".form-global-search > label"
    } else {
        el = ".form-global-search > a"
    }
    uiSearch(el)
}
function uiSearch(el) {
    var a = $(el).parent();
    var b = a.find('.form-recent'); //최근 검색어
    var c = a.find('.form-norecent'); //검색어 없음
    var d = a.find('.form-auto'); //자동 완성
    var f = a.find('.form-cont'); //컨텐츠
    var e = a.find('.form-recent, .form-norecent, .form-auto');

    if (a.find('input').val() != '') {
        a.addClass('open02');
    } else {
        a.addClass('open');
        // 화면밀림 수정.
        setTimeout(function () {
            a.find('input').focus();
        }, 500);
    }
    e.removeClass('show')
    f.removeClass('show')
    /*
	if(b.length > 0) b.addClass('show')
	else c.addClass('show')
	*/

    $('.btn-search-close').click(function () {
        e.removeClass('show');
        a.removeClass('open');
        f.removeClass('show');
        if ($(el).context.localName != 'label') $('#wrap').removeClass('search-open');

        if ($('#h_SearchWord').val() != '') {
            a.find('input').val($('#h_SearchWord').val());
        }

        if (a.find('input').val() != '') {
            a.addClass('open02');
        } else {
            a.removeClass('open02');
        }
    });

    //검색 키워드 삭제
    $('.btn-keyword-delete').click(function () {
        var txtsearchword = $("#txtSearchWord").val();

        if (txtsearchword != "") {
            e.removeClass('show');
            a.find('input').val("").focus();
            if (a.find('input').val() == "") {
                a.removeClass('open02').addClass('open');
                fn_Recently_Search_List();
                if (b.find('li').length > 0) { b.addClass('show'); }
                else { c.addClass('show'); }
            }
            f.addClass('show');
        }

        $("#btnKeywordDelete").removeClass("form-btn-delete02");
    });

    //검색어 전체 삭제
    $(".btn-all-delete").click(function () {
        setCookie('GNB_Search_List', '', -1);
        b.find('li').html('');
        c.addClass("show");
    });

    $(a.find('input')).on('click keyup', function () {
        a.removeClass('open02').addClass('open');

        //자동완성 사용할 경우 사용
        //if ($(this).val() == '') {
        //    e.removeClass('show');
        //    //Home/List에서 호출
        //    fn_Recently_Search_List();
        //    b = a.find('.form-recent');
        //	if (b.length > 0) {b.addClass('show');}
        //	else { c.addClass('show');}
        //}else{
        //    e.removeClass('show');
        //    d.addClass('show');
        //    fn_Auto_Search_List();
        //}
        //--자동완성 사용할 경우 사용

        //--
        e.removeClass('show');
        fn_Recently_Search_List();
        if (b.find('li').length > 0) { b.addClass('show'); }
        else { c.addClass('show'); }
        //--

        f.addClass('show');
        if ($(el).context.localName != 'label') $('#wrap').addClass('search-open');
    }).on('keydown', function (e) {
        if (e.keyCode == 9) {
            /*
			if($(el).context.localName == 'label') $('.select-global, .select-category').show();
			else $('#wrap').removeClass('search-open');
			*/
            e.removeClass('show');
            a.removeClass('open');
            f.removeClass('show');
            if ($(el).context.localName != 'label') $('#wrap').removeClass('search-open');
            if (a.find('input').val() != '') {
                a.addClass('open02');
            } else {
                a.removeClass('open02');
            }
        }
    });
}

/**************************************
	UI SELECT
**************************************/
function uiSelect(el) {
    var a = $(el).parents('[data-select=wrap]');
    var b = a.find('[data-select=btn-close]');
    var c = a.find('.select-list');
    if (a.hasClass('open')) {
        $('.btn-select-close').remove();
        c.scrollTop(0);
        a.removeClass('open');
    } else {
        a.after('<button type="button" class="btn-select-close">검색창 닫기</button>')
        a.addClass('open');
        var offset = 0;
        if (c.find(".on").length > 0) {
            if (c.find(".on").position().top >= c.find(".on").closest("li").height()) {
                offset = c.find(".on").position().top - c.find(".on").closest("li").height()
            }
        }
        c.scrollTop(offset);
    }
    b.click(function () {
        $('.btn-select-close').remove();
        a.removeClass('open');
    });
    $('.btn-select-close').click(function () {
        $(this).remove();
        c.scrollTop(0);
        a.removeClass('open');
    });


}

/**************************************
	익스버전 핵 (IE9)
**************************************/
function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

/**************************************
	UI Toggle
**************************************/
function uiToggle() {
    var btnAll;
    var contAll;
    $(document).on('click', '.ui-toggle .ui-btn', function () {
        try {
            var a;
            if (this.href) a = $(this).attr('href');
            else a = $(this).attr('data-href');
            btnAll = $(this).parents('.ui-toggle').find('.ui-btn');
            contAll = $(this).parents('.ui-toggle').find('.ui-cont');
            if ($(this).hasClass('ui-btn-open')) {
                btnAll.removeClass("ui-btn-open");
                contAll.removeClass('ui-toggle-open');
            } else {
                btnAll.removeClass("ui-btn-open");
                contAll.removeClass('ui-toggle-open');
                $(this).addClass('ui-btn-open');

                $(a).addClass('ui-toggle-open');
                var b = $(this).offset().top;
                //$("html, body").stop().animate({scrollTop:b}, '500', 'swing');
            }
        } catch (e) { return true; }
        return false;
    });
    $(document).on('click', '.ui-toggle .ui-btn-close', function () {
        btnAll = $(this).parents('.ui-toggle').find('.ui-btn');
        $(this).parent('.ui-cont').removeClass('ui-toggle-open');
        btnAll.removeClass("ui-btn-open");
    })
}

/**************************************
	UI Touch Event
**************************************/
var uiTouch = (function () {
    var a = false;
    var b = -1;
    var c = {
        dStartX: -1,
        dStartY: -1,
        dStartT: 0
    };
    var d = ((window.innerHeight / 2) / window.innerWidth).toFixed(2) * 1;
    return {
        init: function () {
            c.dStartX = -1;
            c.dStartX = -1;
            dStartT = 0;
        },
        move: function (x, y) {
            var b = -1;
            var nX = Math.abs(c.dStartX - x);
            var nY = Math.abs(c.dStartY - y);
            var nDis = nX + nY;
            if (nDis < 25) { return b }
            var f = parseFloat((nY / nX).toFixed(2), 10);

            if (f > d) {
                b = 1;
            } else {
                b = 0
            }
            return b
        },
        onStart: function (event) {
            var e = event.originalEvent;
            uiTouch.init();
            b = -1;
            c.dStartX = e.changedTouches[0].pageX;
            c.dStartY = e.changedTouches[0].pageY;
            c.dStartT = e.timeStamp;
            a = true;
        },
        onMove: function (event, swipe, idx) {
            var e = event.originalEvent;
            if (!a) { return }
            var nX = e.changedTouches[0].pageX;
            var nY = e.changedTouches[0].pageY;
            b = uiTouch.move(nX, nY);
            if (event.target.className == 'btn-allmenu') {
                if (c.dStartX - nX < 0) {
                    if (b === 0) uiNaviMove('open')
                }
            } else {
                //console.log(event.currentTarget.nodeName)
                if (event.currentTarget.nodeName == 'LI') {
                    if (c.dStartX - nX > 0) {
                        if (b === 0) uiDeleteMove('open', event.currentTarget)
                    } else {
                        if (b === 0) uiDeleteMove('close', event.currentTarget)
                    }
                } else {
                    if (c.dStartX - nX > 0) {
                        if (b === 0) uiNaviMove('close')
                    }
                }
            }
        },
        onEnd: function (event) {
            if (!a) { return }
            var e = event.originalEvent;
            a = false;
            b = -1;
            uiTouch.init();
        },
        onEvent: function (event, x, y) {

        }
    }
}());

/**************************************
	UI Mobile Navi
**************************************/
function uiNavi() {
    $('.btn-allmenu, .header-btn-close').bind('touchstart', function (event) {
        uiTouch.onStart(event);
    });
    $('.btn-allmenu,  .header-btn-close').bind('touchmove', function (event) {
        uiTouch.onMove(event);
    });
    $('.btn-allmenu, .header-btn-close').bind('touchend', function (event) {
        uiTouch.onEnd(event);
    });
    $(document).on('click', '.btn-allmenu, .header-btn-close', function () {
        if ($(this).hasClass('btn-allmenu')) uiNaviMove('open')
        else uiNaviMove('close');
        return false;
    });
}
function uiNaviMove(a) {
    if (a == 'open') {
        $('#wrap').addClass('header-open');
        $("#wrap.header-open").css({ "height": $('#header').height() });
    }
    else {
        $('#wrap').removeClass('header-open');
        $("#wrap.header-open").css({ "height": "100%" });
    }
}

/**************************************
	UI Banner Text
**************************************/
function uiBanInt() {
    var a = 0;
    var b = $('.banner-txt > li').length;
    uiBanTxt(0)
    setInterval(function () {
        a++;
        if (a > b - 1) a = 0;
        uiBanTxt(a)
    }, 3000);
}
function uiBanTxt(i) {
    var c = $('.banner-txt > li');
    var d = i;
    var e = i - 1;
    c.removeClass()
    c.eq(d).addClass('show')
    c.eq(e).addClass('hide');
}

/**************************************
	UI TabSelect
**************************************/
function uiTabSelect(win) {
    var subSwiper = new Swiper('#tabSelect', {
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        preventClicks: false //false:링크이동 가능, true:링크이동 방지(default)
    });
    if (win > 768) subSwiper.lockSwipes()
    $('#tabSelect li').each(function (i) {
        $('#tabSelect li').eq(i).find('>a').attr('data-index', i);
    });
    var n = $('#tabSelect li').find('a.on').attr('data-index');
    if (typeof (n) == "undefined") { return; }
    var active = Math.round($('#tabSelect').find('.on').offset().left) + Math.round($('#tabSelect').find('.on').outerWidth());
    if (win < active) subSwiper.slideTo(n);
}

/****************************************
	data-column
****************************************/
function uiColumn() {
    var w = $('[data-column=wrap]');
    var a = w.find('>li');
    var b = a.length;
    var n = 0;
    var g = Math.round(a.css('margin-top').replace('px', ""));
    var d;
    var e;
    var f;
    var h;
    a.attr('style', '');
    for (i = 0; i < b; i++) {
        if (Math.round(a.eq(i).position().top) == '-0') {
            n++;
        }
        n = n;
        d = (i - n);
        e = Math.round(a.eq(d).offset().top + a.eq(d).height());
        f = a.eq(i).offset().top - g;
        h = e - f;
        if (e < f) a.eq(i).css('margin-top', h + g + 'px')
    }
}

var userAgent = window.navigator.userAgent.toLowerCase(),
    ios = /iphone|ipod|ipad/.test(userAgent),
    android = /(android)/.test(userAgent);

/**************************************
	UI Modal Popup
**************************************/
function uiModalInt(id, callback, isHideBelow) {
    var modalBg = $('<div class="modal-overlay" id="modal_' + id + '"></div>');
    var top = $(window).scrollTop();
    var layNum = $('.layer-open').length;
    //호출한 id가 열려 있지 않을 경우에만..
    if ($('#' + id).hasClass("layer-open") != true) {
        $('#' + id).attr('data-layer-index', layNum);
        if ($(".modal-overlay").length == 0) {
            $('body').append(modalBg);
        }

        if (isHideBelow != undefined && isHideBelow == false) {

        } else {
            $('[data-layer-index="' + (layNum - 1) + '"]').addClass('layer-hid');
        }
        $('#modal_' + id).css('z-index', 10000 + (layNum))
        $('#' + id).addClass('layer-open').css('z-index', 10000 + (layNum + 1))
    }
    $('#' + id).find('.layer-close').off("click").on('click', function () {
        uiModalClose(id, top, callback)
        return false;
    });
    $('.modal-overlay').off("click").on('click', function () {
        layNum = $('.layer-open').length - 1;
        if ($('[data-layer-index="' + layNum + '"]').hasClass("layer-lock") != true) {
            id = $('[data-layer-index="' + layNum + '"]').attr('id');
            uiModalClose(id, top, callback)
            return false;
        }
    });

    
    if (!android)
    {
        // 아이폰 팝업창 오류 수정(2018-03-05)
        // 안드로이드가 아닐경우로 변경 (2018-04-18)
        $("html, body").addClass("modal-open");
    }
    try { window.Android.refreshSetScrollable(false); } catch (e) { };

}
function uiModalClose(id, top, callback) {
    var layNum = $('.layer-hid').length;
    if (typeof callback === 'function') {
        callback.call($('#' + id));
    };
    if ($('#' + id).hasClass('layer-open')) {
        if (layNum == 0) {
            $('#' + id).removeClass('layer-open').removeAttr('data-layer-index').removeAttr('style');
            $('#modal_' + id).remove();
        }
        else {
            $('#' + id).removeClass('layer-open').removeAttr('data-layer-index').removeAttr('style');
            $('[data-layer-index="' + (layNum - 1) + '"]').removeClass('layer-hid');
        }
    }
    if (!android) {
        // 아이폰 팝업창 오류 수정(2018-03-05)
        // 안드로이드가 아닐경우로 변경 (2018-04-18)
        $("html, body").removeClass("modal-open");
    }
    try { window.Android.refreshSetScrollable(true); } catch (e) { };
    $(window).scrollTop(top)
}
function uiModaAlllClose() {
    $('.layer-open').removeClass('layer-open').removeAttr('data-layer-index').removeAttr('style');
    $('.modal-overlay').remove();
    if (!android) {
        // 아이폰 팝업창 오류 수정(2018-03-05)
        // 안드로이드가 아닐경우로 변경 (2018-04-18)
        $("html, body").removeClass("modal-open");
    }
    try { window.Android.refreshSetScrollable(true); } catch (e) { };
    $(window).scrollTop(top)
}
/**************************************
	UI Delete Swipe
**************************************/
function uiDeleteSwipe(win) {
    if (win < 769) {
        $('.list-type06 li').bind('touchstart', function (event) {
            uiTouch.onStart(event);
        });
        $('.list-type06 li').bind('touchmove', function (event) {
            uiTouch.onMove(event);
        });
        $('.list-type06 li').bind('touchend', function (event) {
            uiTouch.onEnd(event);
        });
    }
}
function uiDeleteMove(a, el) {
    //console.log(el)
    if (a == 'open') $(el).addClass('open');
    else $(el).removeClass('open');
}

/**************************************
	UI Close Btn
**************************************/
function uiClose() {
    $(document).on('click', '[data-close]', function () {
        var id = $(this).attr('data-close');
        $('#' + id).slideUp(300)
    });
}

/**************************************
	UI Landing Slider
**************************************/
function uiLandingSlider() {
    var n = $('.landing-slider > .swiper-wrapper > li').length;
    if (n > 1) {
        var subSwiper = new Swiper('.landing-slider', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-btn-next',
            prevButton: '.swiper-btn-prev',
            slidesPerView: 1,
            paginationClickable: true,
            loop: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: true
        });
    }
}

/**************************************
	UI Caps Lock Detect
**************************************/
function uiCapsLockDetecting() {

    if ($('#spPasswordCapsLock').length == 0) {
        $('.CapsLockDetect').last().parent().after('<p class="form-caution" id="spPasswordCapsLock" style="display:none;"><span>대문자 잠금 키(Caps Lock)를 확인해주세요.</span></p>');
    }

    var caps = $('#spPasswordCapsLock');
    var timer = null;
    var LOGINPAGE = LOGINPAGE || {};
    LOGINPAGE.CAPSdetect = {};
    $(function () {
        LOGINPAGE.CAPSdetect.engage();
    });

    LOGINPAGE.CAPSdetect.isDetected = true;
    LOGINPAGE.CAPSdetect.capsOn = false;

    LOGINPAGE.CAPSdetect.engage = function () {
        $('.CapsLockDetect').on('keypress', LOGINPAGE.CAPSdetect.shiftDetect);
        $(window).on('keydown', LOGINPAGE.CAPSdetect.capsDetect);
    }

    LOGINPAGE.CAPSdetect.shiftDetect = function (event) {

        var which = event.keyCode;
        var shift = event.shiftKey;
        var targ = event.target;
        if ((which >= 65 && which <= 90 && !shift) || (which >= 97 && which <= 122 && shift)) {
            caps.show();
            if (timer != null) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () { caps.hide(); }, 1000);
            LOGINPAGE.CAPSdetect.isDetected = true;
            LOGINPAGE.CAPSdetect.capsOn = true;
        } else if ((which >= 65 && which <= 90 && shift) || (which >= 97 && which <= 122 && !shift)) {
            caps.hide();
        }
    }

    LOGINPAGE.CAPSdetect.capsDetect = function (event) {
        if (event.keyCode === 20 && LOGINPAGE.CAPSdetect.isDetected) {
            LOGINPAGE.CAPSdetect.capsOn = (LOGINPAGE.CAPSdetect.capsOn) ? false : true;
            if (LOGINPAGE.CAPSdetect.capsOn) {
                caps.show();
                if (timer != null) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () { caps.hide(); }, 1000);
            } else {
                caps.hide();
            }
        }
    }
}