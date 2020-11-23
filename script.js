
const cssListTlitle = {
    width:'90%',
}

const cssListOl={
    width: '90%',
    margin: 'auto 3.8rem',
    border: '1px solid #5B8F91'
}

const cssLi = {
    background: '#71B6B8',
}
const cssLiImp = {
    background: '#ffffff',
}

const cssLiMouseOver = {
    color: '#000EFF',
    cursor: 'pointer'
}

const cssLiMouseOut = {
    color: 'initial'
}

const cssResult = {
    width: '90%',
    margin: '0 3.8rem',
    marginTop: '1rem',
    paddingTop: '7px',
    background: '#498916',

}

$(document).ready(function() {
    const subject = $('#subject')
    const grade = $('#grade')
    const teacher = $('h3')
    const listTitle = $('#listtitle')
    const listItems = $('#list')
    const liItems = $('li')
    const result = $('#data')

    subject.addClass('title is-size-2 ml-6')
    subject.text('Programación para Web')
    grade.addClass('title is-size-3 ml-6')
    grade.text('Grupo 5to. A')
    teacher.addClass('ml-6 is-size-5')
    teacher.html('Profesor<strong>José Nabor Ramírez Morfín</strong>')
    listTitle.addClass('title has-text-centered mt-5')
    listTitle.css(cssListTlitle)
    listTitle.text('Listado de Alumnos')

    liItems.addClass('is-size-6 p-1')
    listItems.css(cssListOl)
    $("li:nth-child(even)").css(cssLiImp);
    $("li:nth-child(odd)").css(cssLi)

    liItems.hover(function() {
        $(this).css(cssLiMouseOver)
    })
    
    liItems.mouseout(function() {
        $(this).css(cssLiMouseOut)
    })

    liItems.click(function() {
        result.html(`<p style="color: #000000">Resultado: <span style="color: #ffffff">${$(this).text()}<span></p>`)
        result.css(cssResult)
    })
    

})
