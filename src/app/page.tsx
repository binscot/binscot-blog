import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { subtitle, title } from '@/components/primitives';
import Count from '@/components/count';
import { GithubIcon } from '@/components/icons';
import ReduxTestComponext from '@/components/reduxTestComponext';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: 'blue' })}>plz wait...</h1>
        <br />
        <h1 className={title({ color: 'green' })}>Binscot&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>making...&nbsp;</h1>
        <br />
        <p className={title({ color: 'pink', size: 'sm' })}>keke&nbsp;</p>
        <p className={title({ color: 'foreground', size: 'sm' })}>keke&nbsp;</p>
        <br />
        <p className={title({ color: 'cyan', size: 'sm' })}>keke&nbsp;</p>
        <p className={title({ color: 'yellow', size: 'sm' })}>keke&nbsp;</p>
        <br />
        <p className={subtitle({})}>keke&nbsp;</p>
      </div>
      <ReduxTestComponext />
      <section>
        <Count />
      </section>
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow'
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
