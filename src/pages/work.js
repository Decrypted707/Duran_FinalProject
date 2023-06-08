import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button, Section, Text, Input, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"work"} />
		<Helmet>
			<title>
				Work | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Work | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Header" align-items="center" justify-content="center" padding="16px 0 16px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
			/>
			<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
				<Image src="https://uploads.quarkly.io/6480004491dc6500183fcb82/images/KA.png?v=2023-06-07T13:38:57.095Z" width="64px" z-index="3" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="menu"
					md-width="100%"
					align-items="center"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-top={0}
					lg-transform="translateY(0px) translateX(0px)"
					md-left={0}
					md-height="100%"
					padding="0px 0 0px 0"
				>
					<Override
						slot="item"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
						text-align="center"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						md-color="--dark"
						md-font="16px/24px sans-serif"
						letter-spacing="0.5px"
						md-opacity=".5"
						font="--base"
						text-decoration-line="initial"
						color="--dark"
						opacity=".5"
						md-active-opacity="1"
						transition="opacity .15s ease 0s"
						md-transition="opacity .15s ease 0s"
						md-hover-opacity="1"
						hover-opacity="1"
						text-transform="initial"
					/>
					<Override
						slot="link-active"
						opacity="1"
						color="--primary"
						cursor="default"
						md-opacity="1"
						md-cursor="default"
					/>
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					md-position="relative"
					category="md"
					icon={MdMenu}
					size="36px"
					md-right="0px"
				/>
				<Override
					slot="menu-open"
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					md-top={0}
				/>
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
			</Components.BurgerMenu>
			<Button
				font="--base"
				letter-spacing="0.5px"
				border-radius="0px"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				justify-self="end"
				padding="8px 18px 8px 18px"
				z-index="5"
				background="--color-primary"
				md-display="none"
				white-space="nowrap"
				hover-transform="translateY(-4px)"
				href="/index"
			>
				Homepage
			</Button>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://uploads.quarkly.io/6480004491dc6500183fcb82/images/KA.png?v=2023-06-07T13:38:57.095Z)"
		>
			<Override
				slot="SectionContent"
				md-align-items="center"
				align-items="stretch"
				justify-content="center"
				margin="0px 60px 0px 300px"
			/>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" width="100%">
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%" sm-padding="0px 0px 0px 0px">
					<Box>
						<Box
							max-width="360px"
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-primary"
							sm-padding="24px 12px 36px 12px"
						>
							<Text
								as="h3"
								font="--headline3"
								margin="0 0 20px 0"
								sm-padding="0px 8px 0px 8px"
								sm-margin="0 0 8px 0"
							>
								Employee Log In
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Employee ID
										</Text>
										<Input width="100%" name="empID" type="number" />
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Password
										</Text>
										<Input width="100%" type="password" name="empPass" />
									</Box>
									<Box
										padding="8px 8px 8px 8px"
										width="100%"
										display="flex"
										flex-direction="column"
										align-items="flex-end"
									>
										<Button background="--color-dark" href="/work#work">
											Log In
										</Button>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="About"
			box-sizing="border-box"
			background="--color-lightD1"
			padding="90px 0px 100px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				color="--dark"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				text-transform="uppercase"
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
			>
				Mission
			</Text>
			<Text
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="--headline3"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
				color="--dark"
			>
				Make it possible for everyone. You will start it all
			</Text>
		</Section>
		<Section padding="90px 0 100px 0" quarkly-title="Reviews-3" id="work">
			<Text margin="0px 0px 70px 0px" font="normal 600 46px/1.2 --fontFamily-sans" text-align="center" md-margin="0px 0px 50px 0px">
				Applicants
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="repeat(3, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				grid-gap="36px 30px"
				justify-content="center"
				lg-grid-template-rows="auto"
				sm-grid-template-columns="1fr"
				sm-grid-gap="30px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							Applicant Resume
							<br />
							Applicant Informatin
							<br />
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 0px 0px">
							Apply this applicant to a company
						</Text>
						<Button>
							Apply to...
						</Button>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18:57:20.417Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Adam Luis
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								Blind
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							Applicant Resume
							<br />
							Applicant Informatin
							<br />
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 0px 0px">
							Apply this applicant to a company
						</Text>
						<Button>
							Apply to...
						</Button>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21:07:08.834Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Melisa Williams
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								Autistic
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							Applicant Resume
							<br />
							Applicant Informatin
							<br />
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 0px 0px">
							Apply this applicant to a company
						</Text>
						<Button>
							Apply to...
						</Button>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18:57:30.439Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Jane Adams
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								Left arm amputee
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							Applicant Resume
							<br />
							Applicant Informatin
							<br />
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 0px 0px">
							Apply this applicant to a company
						</Text>
						<Button>
							Apply to...
						</Button>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21:12:16.116Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Michael Lee
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								Both arms amputee
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
								Applicant Resume
								<br />
								Applicant Informatin
								<br />
							</Text>
						</Box>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 0px 0px">
							Apply this applicant to a company
						</Text>
						<Button>
							Apply to...
						</Button>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22:37:36.273Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Tom Paul
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								Left leg amputee
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							Applicant Resume
							<br />
							Applicant Informatin
							<br />
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 0px 0px">
							Apply this applicant to a company
						</Text>
						<Button>
							Apply to...
						</Button>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21:12:01.188Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Maria Davidson
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								Mute
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});