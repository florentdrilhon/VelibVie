import { AppService } from "./services/app.service"

const appService = new AppService()

const stationStatuses = async () => {
    const stationStatuses = await appService.getStationStatuses()
    console.log(stationStatuses)
}

stationStatuses()