export default class OngPage {
  constructor(profile,InstitutionService,$rootScope,StorageService,ProfileService) {
    this.profile = profile.data
    this.service = InstitutionService
    this.rootScope = $rootScope
    this.storage = StorageService
    this.profileService = ProfileService
    this.getInstitution(profile.data.institutions.uuid)
  }
  getInstitution(id) {
    this.service.findById(id)
      .then(response => {
        delete response.data.cover
        delete response.data.avatar
        this.page = response.data
      })
  }
  save(data) {
    this.service.savePage(data, progress => {
      this.progress = progress
    }).then(
        response => {
          this.profile.avatar = response.data.user.avatar
          this.profileService.setProfile(this.profile)
          delete this.page.cover
          delete this.page.avatar
          
          this.rootScope.$broadcast('alert', {
            type: 'alert-success',
            icon: 'fa-check',
            message: {
              message: 'Página oficial salva com sucesso! :)'
            }
          })
        },
        error => {
          this.rootScope.$broadcast('alert', {
            type: 'alert-danger',
            icon: 'fa-exclamation',
            message: error.data
          })
        }
      )
  }
}

OngPage.$inject = ['profile','InstitutionService','$rootScope','StorageService','ProfileService']