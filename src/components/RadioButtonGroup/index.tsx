import React from "react";
import { View } from "react-native";

interface RadioButtonGroupProps {
  valueState: string;
  children: React.ReactNode
}

export function RadioButtonGroup({
  valueState,
  children,
}: RadioButtonGroupProps) {
  const innerObject = { valueState };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, innerObject);
    }
    return child;
  });

  return <View>{childrenWithProps}</View>;
}
