import {
  Input as GlueStackInput,
  InputField,
  FormControl,
  FormControlErrorText,
  FormControlError,
} from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

type InputProps = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  errorMessage?: string | null;
  isInvalid?: boolean;
};

export function Input({
  errorMessage = null,
  isReadOnly = false,
  isInvalid = false,
  ...rest
}: InputProps) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} w='$full' mb='$4'>
      <GlueStackInput
        h='$14'
        borderWidth='$0'
        borderRadius='$md'
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? '$red500 ' : '$green500',
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
        $invalid={{
          borderWidth: 1,
          borderColor: '$red500',
        }}
      >
        <InputField
          px='$4'
          bg='$gray700'
          color='$white'
          fontFamily='$body'
          placeholderTextColor='$gray300'
          {...rest}
        />
      </GlueStackInput>

      <FormControlError>
        <FormControlErrorText color='$red500'>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
