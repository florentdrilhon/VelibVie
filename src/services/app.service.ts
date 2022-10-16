export class AppService {

    public async getStationStatuses(): Promise<any> {
        const response = await fetch(
            'https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json')
        return response.json()
    }
}