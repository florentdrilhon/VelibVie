import { View, ActivityIndicator, Text } from "react-native";
import { useGetStationStatuses } from "../hooks/stationStatuses";

export const StationStatuses: React.FC<{}> = () => {
  const { data: stationStatuses, isLoading: isStationLoading } =
    useGetStationStatuses();
  if (isStationLoading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View>
      <Text>{`Got station statuses : ${stationStatuses}`}</Text>
    </View>
  );
};
