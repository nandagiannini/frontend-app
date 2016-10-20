export default class DonateBillet {
  constructor($uibModalInstance, data, DonateService, StorageService) {
    this.instance = $uibModalInstance
    this.donateService = DonateService
    this.uuid = data.uuid
    this.donate = data.donate
    this.donate.is_anonymous = false
    this.logged = StorageService.getItem('token')
  }
  buildBillet() {
    if (this.logged) {
      delete this.donate.name
      delete this.donate.email
      delete this.donate.birthdate
      if (this.donate.document) delete this.donate.document
    }
    let method = (this.logged) ? 'printLoggedBillet' : 'printPublicBillet'
    this.donateService[method](this.uuid, this.donate)
      .then(
        response => this.instance.close({uuid: this.uuid, data: response.data}),
        error => this.instance.close(error.data)
      )
  }
  cancel() {
    this.instance.dismiss('cancel')
  }
}

DonateBillet.$inject = ['$uibModalInstance', 'data', 'DonateService', 'StorageService']