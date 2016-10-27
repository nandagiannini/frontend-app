class EventExplore {
  constructor(ActivityAreaService,EventService,StorageService) {
    this.activityAreaService = ActivityAreaService
    this.eventService = EventService
    this.user = StorageService.getItem('user')
    this.modelOptions = {
      updateOn: 'default blur',
      debounce: {
        'default': 600,
        'blur': 0
      }
    }
    this.isOpen = false
    this.getEvents()
    this.getActivityAreas()
    this.search = () => this.getSearch(this.query)
  }
  getEvents() {
    this.eventService.findAll()
      .then(response => this.events = response.data.values)
  }
  getSearch(data) {
    data = angular.copy(data)
    if (data.area_activity_uuid) {
      data.area_activity_uuid = data.area_activity_uuid.uuid
    }
    this.eventService.search(data)
      .then(response => this.events = response.data.values)
  }
  getActivityAreas() {
    this.activityAreaService.findAll()
      .then(response => this.area_activities = response.data.values)
  }
}

EventExplore.$inject = ['ActivityAreaService','EventService','StorageService']

export default EventExplore