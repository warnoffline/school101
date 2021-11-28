const modal = $.modal({
    title: 'Связь со школой',
    closable: true,
    content: `<p>Телефон: +7(843)-234-52-41;+7(843)-234-49-32</p>
    <p>E-Mail: sch101@mail.ru, S101.kzn@tatar.ru</p>
    <p>Адрес: 420075, г. Казань, ул. Начальная, дом №6, ул.Советская, дом №14а, ул. Азина дом 65а</p>`,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            modal.close()
        }}
    ]
})

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    if(btnType === 'price'){
        modal.open()
    }
})