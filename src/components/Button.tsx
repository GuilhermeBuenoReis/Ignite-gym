import {
  Button as GlueStackButton,
  Text,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof GlueStackButton> & {
  title: string;
  variant?: 'solid' | 'outline';
  isLoading?: boolean;
};

export function Button({
  variant = 'solid',
  title,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <GlueStackButton
      w='$full'
      h='$14'
      bg={variant === 'outline' ? 'transparent' : '$green700'}
      borderWidth={variant === 'outline' ? '$1' : '$0'}
      borderColor='$green500'
      rounded='$sm'
      $active-backgroundColor={variant === 'outline' ? '$gray500' : '$green500'}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color='$white' />
      ) : (
        <Text
          color={variant === 'outline' ? '$green500' : '$white'}
          fontFamily='$heading'
          fontSize='$sm'
        >
          {title}
        </Text>
      )}
    </GlueStackButton>
  );
}
