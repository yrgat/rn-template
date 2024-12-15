import { SwiperTest } from "@/components/SwiperTest";
import { useRef, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import Swiper from "react-native-swiper";

import { swiper_test_data } from "@/constants";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={index => setActiveIndex(index)}
      >
        {swiper_test_data.map(item => {
          return (
            <SwiperTest
              key={item.title}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
};

export default Welcome;
