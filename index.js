/* eslint-disable*/
$('#js-shopping-list-form').submit(function(e){
    event.preventDefault()
    $('.shopping-list').append($("<li><span class='shopping-item'>"+$('input').first().val()+"</span><div class='shopping-item-controls'></div><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></li>"))
    this.reset()
    $('li').click(function(e){
        switch($(e.target).text()){
            case 'check':
                $(this.closest('li')).find('span').toggleClass('shopping-item__checked')
            break;
            case 'delete':
                this.closest('li').remove()
            break;
        }
    })
})

$('li').click(function(e){
    switch($(e.target).text()){
        case 'check':
            $(this.closest('li')).find('span').toggleClass('shopping-item__checked')
        break;
        case 'delete':
            this.closest('li').remove()
        break;
    }
})