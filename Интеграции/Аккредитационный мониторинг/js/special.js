function Body() {
    this.setting;
    this.name = "setting";
    this.body = $('body');
}

Body.prototype.switchClass = function(oldVal, newVal) {
    this.body.removeClass(oldVal);
    this.body.addClass(newVal);
}

Body.prototype.setBody = function (setting) {
    this.body.attr('class', "special " + setting.text + " "
        + setting.theme + " " + setting.image
        + " " + setting.font + " " + setting.kerning);
    $('#special-header a.'+setting.text).addClass('active');
    $('#special-header a.set-'+setting.theme).addClass('active');
    $('#special-header div.set-image-visible > a.'+setting.image).addClass('active');
    // $('#special-header li.'+setting.font).addClass('active');
    // $('#special-header li.'+setting.kerning).addClass('active');
    $('#fontModal li.'+setting.font).addClass('active');
    $('#kerningModal li.'+setting.kerning).addClass('active');
    this.setting = setting;
}

Body.prototype.setTextSize = function(name) {
    this.switchClass(this.setting.text, name);
    $("#special-header a."+this.setting.text).removeClass('active');
    $("#special-header a."+name).addClass('active');
    this.setting.text = name;
    this.saveSetting();
    return false;
}

Body.prototype.setTheme = function(name) {
    this.switchClass(this.setting.theme, name);
    $("#special-header a.set-"+this.setting.theme).removeClass('active');
    $("#special-header a.set-"+name).addClass('active');
    this.setting.theme = name;
    this.saveSetting();
    return false;
}

Body.prototype.setImage = function(name) {
    this.switchClass(this.setting.image, name);
    $("#special-header div.set-image-visible > a."+this.setting.image).removeClass('active');
    $("#special-header div.set-image-visible > a."+name).addClass('active');
    this.setting.image = name;
    this.saveSetting();
    return false;
}

Body.prototype.setFont = function(name) {
    this.switchClass(this.setting.font, name);
    $("#fontModal li."+this.setting.font).removeClass('active');
    $("#fontModal li."+name).addClass('active');
    this.setting.font = name;
    this.saveSetting();
    return false;
}

Body.prototype.setKerning = function(name) {
    this.switchClass(this.setting.kerning, name);
    $("#kerningModal li."+this.setting.kerning).removeClass('active');
    $("#kerningModal li."+name).addClass('active');
    this.setting.kerning = name;
    this.saveSetting();
    return false;
}

Body.prototype.saveSetting = function() {
    $.cookie(this.name, JSON.stringify(this.setting), {path: '/'});
}

Body.prototype.loadSetting = function() {
    this.setting = $.parseJSON($.cookie(name));
}

Body.prototype.init = function() {
    // if ($.parseJSON($.cookie('spec_active')) === 1) {
    // 	body.setBody(setting);
    // 	// $.cookie('spec_active', '1');
    // 	console.log('Body.init()');
    // }
}

$(document).ready(function() {
    var body = new Body();
    var name = "setting";
    var defaultSetting = {
        text: "text-sm",
        theme: "black",
        image: "imagesoff",
        font: "text-arial",
        kerning: "kerning-xs",
    };
    if (typeof $.cookie('spec_active') === 'undefined') {
        $.cookie('spec_active', '0', {path: '/'});
    }
    if ($.parseJSON($.cookie('spec_active')) === 1) {
        if ($.parseJSON($.cookie('spec_active')) === 1) {
            let setting = $.parseJSON($.cookie(name));
            body.setBody(setting);
            $('.special-button.special-open').trigger('click');
        }
    }
    if (typeof $.cookie(name) === 'undefined') {
        body.setting = defaultSetting;
        body.saveSetting();
    }
    var setting = $.parseJSON($.cookie(name));

    $('.special-button.special-open').on('click', function() {
        if ($.parseJSON($.cookie('spec_active')) === 0) {
            let setting = $.parseJSON($.cookie(name));
            body.setBody(setting);
            $.cookie('spec_active', '1', {path: '/'});
        }
    });

    $('.special-button.special-close').on('click', function() {
        $.cookie('spec_active', '0', {path: '/'});
    });

    $('#special-header div.font-size > a').on('click', function() {
        return body.setTextSize($(this).data('value'));
    });

    $('#special-header div.set-themes > a').on('click', function() {
        return body.setTheme($(this).data('value'));
    });

    $('#special-header div.set-image-visible > a').on('click', function() {
        return body.setImage($(this).data('value'));
    });

    $('#fontModal ul.set-font-family > li > a').on('click', function() {
        return body.setFont($(this).data('value'));
    });

    $('#kerningModal ul.set-kerning > li > a').on('click', function() {
        return body.setKerning($(this).data('value'));
    });
});

