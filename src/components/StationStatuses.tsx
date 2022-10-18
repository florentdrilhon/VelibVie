import { View, ActivityIndicator, Text } from "react-native";
import { useGetStationStatuses } from "../hooks/getStationStatuses";

export const StationStatuses: React.FC<{}> = () => {
  const { data: stationStatuses, isLoading: isStationLoading } =
    useGetStationStatuses();
  if (isStationLoading) {
    return <ActivityIndicator size="large" />;
  }
  console.log({ stationStatuses });
  return (
    <View>
      <Text>{`Got station statuses : ${stationStatuses}`}</Text>
    </View>
  );
};
