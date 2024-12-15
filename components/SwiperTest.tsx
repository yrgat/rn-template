import { View, Text } from "react-native";

type SwiperTestProps = {
  title: string;
  description: string;
};

export const SwiperTest = ({ title, description }: SwiperTestProps) => {
  return (
    <View>
      <Text className="items-center font-JakartaBold">
        {title}
      </Text>
      <Text className="items-center">
        {description}
      </Text>
    </View>
  );
};
