import React from "react";
import { useOverrides, StackItem, Stack, Section } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"padding": "60px 0",
	"sm-padding": "40px 0",
	"min-height": "600px",
	"sm-min-height": "auto",
	"background": "--color-light",
	"display": "flex",
	"flex-direction": "column"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"text-transform": "uppercase",
			"letter-spacing": "1px",
			"max-width": "850px",
			"color": "--grey",
			"margin": "0px",
			"children": "Eyebrow"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"margin": "8px 0px 32px",
			"font": "--headline1",
			"md-font": "--headline2",
			"color": "--dark",
			"max-width": "850px",
			"children": "Heading"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"margin-top": "auto",
			"color": "--grey",
			"font": "--base"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"md-width": "50%",
			"sm-width": "100%"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake."
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"md-width": "50%",
			"sm-width": "100%"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake."
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"md-width": "50%",
			"sm-width": "100%"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake."
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"md-width": "50%",
			"sm-width": "100%"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake."
		}
	}
};

const Img = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Text {...override("text2")} />
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Text {...override("text3")} />
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Text {...override("text4")} />
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Text {...override("text5")} />
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Img, { ...Section,
	defaultProps,
	overrides
});
export default Img;