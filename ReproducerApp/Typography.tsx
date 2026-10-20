/* istanbul ignore file */
/* This is text component and should not be tested in isolation */
import { type Ref } from 'react'
import { type HostInstance, StyleSheet, Text, type TextProps } from 'react-native'

interface TypographyTextProps {
    color: string
    fontSize: string
    letterSpacing: string
    fontWeight: string
    lineHeight: string
    alignCenter: boolean
    ref?: Ref<HostInstance>
}

export interface TypographyProps
    extends TextProps, Partial<TypographyTextProps> { }

export const Typography = ({
    maxFontSizeMultiplier = 2.0,
    style,
    ref,
    ...rest
}: TypographyProps) => (
    <Text
        ref={ref}
        {...rest}
        maxFontSizeMultiplier={maxFontSizeMultiplier}
        style={[
            styles.styledText,
            style
        ]}
    />
)

Typography.displayName = 'Typography'

/* istanbul ignore next */
const styles = StyleSheet.create({
    styledText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 16,
        letterSpacing: 1,
        fontWeight: 'bold',
        lineHeight: 32
    }
})
