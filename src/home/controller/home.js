export default class Home {
  constructor($scope,$timeout,$interval) {

    let categories = ['fazer um jantar','fazer um aniversário','fazer uma corrida','dar uma festa'],
        length = 4,
        count = 0
    
    $interval(() => {
      count++
      if (count >= length) count = 0
      this.category = categories[count]
    }, 2000)

    this.impact = {
      image: 'assets/images/causas-impactadas.jpg',
      title: 'João se curou do câncer',
      text: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent Quem manda na minha terra sou Euzis! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.'
    }
    this.impacts = [
      {
        image: 'assets/images/causas-impactadas.jpg',
        title: 'João se curou do câncer',
        text: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent Quem manda na minha terra sou Euzis! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.'
      },
      {
        image: 'assets/images/causas-impactadas.jpg',
        title: 'João aprender a ler',
        text: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent Quem manda na minha terra sou Euzis! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.'
      },
      {
        image: 'assets/images/causas-impactadas.jpg',
        title: 'João ganhou um lar',
        text: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent Quem manda na minha terra sou Euzis! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.'
      },
      {
        image: 'assets/images/causas-impactadas.jpg',
        title: 'João tem um cachorro',
        text: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent Quem manda na minha terra sou Euzis! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.'
      }
    ]
    this.loadImpact(0)
  }
  loadImpact(index) {
    this.impact = this.impacts[index]
  }
}

Home.$inject = ['$scope','$timeout','$interval']