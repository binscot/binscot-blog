import React from 'react';
import { Card, CardHeader, CardBody, Image, Divider } from '@nextui-org/react';
import {
  AstroIcon,
  BugIcon,
  BunIcon,
  CLIBoldIcon,
  CLILinearIcon,
  CheckLinearIcon,
  ChevronRightLinearIcon,
  CodeDocumentLinearIcon,
  CodeSandboxIcon,
  CopyLinearIcon,
  CubesLinearIcon,
  DevicesIcon,
  DiscordIcon,
  DocumentCodeBoldIcon,
  EyeBoldIcon,
  FatrowsBoldIcon,
  FlashIcon,
  GamingConsoleIcon,
  GithubIcon,
  HashBoldIcon,
  HashLinearIcon,
  HeartBoldIcon,
  HeartFilledIcon,
  HeartLinearIcon,
  HtmlLogoLinearIcon,
  InfoBoldIcon,
  JavascriptIcon,
  KeyboardBoldIcon,
  KeyboardOpenBoldIcon,
  KeyboardTwoToneIcon,
  LinkCircleLinearIcon,
  LinkLinearIcon,
  LinkSquaredLinearIcon,
  MagicIcon,
  MaximizeLinearIcon,
  MoonFilledIcon,
  MoonIcon,
  MoreSquareBoldIcon,
  MouseCircleBoldIcon,
  MouseCircleLinearIcon,
  NewNextJSIcon,
  NextBoldIcon,
  NextJsIcon,
  NoteLinearIcon,
  NpmIcon,
  NpmSmallIcon,
  OpenCollectiveIcon,
  PaletteIcon,
  PaperclipLinearIcon,
  PatreonIcon,
  PauseBoldIcon,
  PauseCircleBoldIcon,
  PlayBoldIcon,
  PlusLinearIcon,
  PnpmIcon,
  PreviousBoldIcon,
  RemixIcon,
  RepeatOneBoldIcon,
  RotateLeftLinearIcon,
  RotateRightLinearIcon,
  SearchLinearIcon,
  ServerLinearIcon,
  ShuffleBoldIcon,
  SimpleGridIcon,
  SquaresBoldIcon,
  StorybookIcon,
  TagUserLinearIcon,
  TickBoldIcon,
  TwitterIcon,
  TypescriptIcon,
  VercelIcon,
  VerticalDotsIcon,
  ViteIcon,
  YarnIcon,
  SunIcon,
  StarIcon
} from '@/components/icons';
import { RelumeLogo } from '@/components/icons/sponsors';
import { title } from '@/components/primitives';

export default function IconsPage() {
  return (
    <div>
      <Card>
        <CardHeader className="flex gap-3">
          <Image alt="nextui logo" height={40} radius="sm" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={40} />
          <div className="flex flex-col">
            <p className={title({ color: 'green' })}>Icons</p>
          </div>
        </CardHeader>
        <Divider />

        <CardBody>
          <div className="flex flex-wrap space-x-2">
            <VerticalDotsIcon />
            <TickBoldIcon />
            <BugIcon />
            <DevicesIcon />
            <FlashIcon />
            <GamingConsoleIcon />
            <HeartFilledIcon />
            <MagicIcon />
            <MoonFilledIcon />
            <MoonIcon />
            <SunIcon />
          </div>
        </CardBody>
        <CardBody>
          <div className="flex flex-wrap space-x-2">
            <StorybookIcon width="2em" height="2em" />
            <CodeSandboxIcon width="2em" height="2em" />
            <JavascriptIcon width="2em" height="2em" />
            <TypescriptIcon width="2em" height="2em" />
            <BunIcon width="2em" height="2em" />
            <CLIBoldIcon width="2em" height="2em" />
            <OpenCollectiveIcon />
            <PatreonIcon />
            <DocumentCodeBoldIcon />
            <EyeBoldIcon />
          </div>
        </CardBody>
        <CardBody>
          <div className="flex flex-wrap space-x-2">
            <PaletteIcon />
            <InfoBoldIcon />
            <KeyboardOpenBoldIcon />
            <KeyboardBoldIcon />
            <MoreSquareBoldIcon />
            <MouseCircleBoldIcon />
            <NextBoldIcon />
            <PauseCircleBoldIcon />
            <PauseBoldIcon />
            <PlayBoldIcon />
            <PreviousBoldIcon />
          </div>
        </CardBody>
        <CardBody>
          <div className="flex flex-wrap space-x-2">
            <ShuffleBoldIcon />
            <SquaresBoldIcon />
            <CheckLinearIcon />
            <ChevronRightLinearIcon />
            <CLILinearIcon />
            <CodeDocumentLinearIcon />
            <CopyLinearIcon />
            <CubesLinearIcon />
            <HashLinearIcon />
            <FatrowsBoldIcon />
          </div>
        </CardBody>
        <CardBody>
          <div className="flex flex-wrap space-x-2">
            <HeartLinearIcon />
            <HtmlLogoLinearIcon />
            <LinkCircleLinearIcon />
            <LinkSquaredLinearIcon />
            <LinkLinearIcon />
            <MaximizeLinearIcon />
            <MouseCircleLinearIcon />
            <NoteLinearIcon />
            <PaperclipLinearIcon />
            <HashBoldIcon />
          </div>
        </CardBody>
        <CardBody>
          <div className="flex flex-wrap space-x-2">
            <PlusLinearIcon />
            <RotateLeftLinearIcon />
            <RotateRightLinearIcon />
            <SearchLinearIcon />
            <ServerLinearIcon />
            <SimpleGridIcon />
            <TagUserLinearIcon />
            <KeyboardTwoToneIcon />
            <RepeatOneBoldIcon />
            <HeartBoldIcon />
          </div>
        </CardBody>
        <CardBody>
          <div className="flex flex-wrap space-x-2">
            <NextJsIcon width="2em" height="2em" />
            <VercelIcon width="3em" height="3em" />
            <NpmIcon width="2em" height="2em" />
            <NpmSmallIcon width="2em" height="2em" />
            <PnpmIcon width="2em" height="2em" />
            <YarnIcon width="2em" height="2em" />
            <AstroIcon width="2em" height="2em" />
            <RemixIcon width="2em" height="2em" />
          </div>
        </CardBody>
        <CardBody>
          <div className="flex flex-wrap space-x-2">
            <StarIcon />
            <RelumeLogo />
            <GithubIcon />
            <TwitterIcon />
            <DiscordIcon />
            <ViteIcon width="2em" height="2em" />
            <NewNextJSIcon width="2em" height="2em" />
          </div>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
}
