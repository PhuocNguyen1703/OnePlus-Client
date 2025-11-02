import { useLocale, useTranslations } from 'next-intl'
import { LocaleSwitcherSelect } from './LocaleSwitcherSelect'
import { japanFlag, ukFlag, vietnamFlag } from '../../../../public/images'

const LocaleSwitcher = () => {
  const t = useTranslations('Components.LocaleSwitcher')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t('label')}
      items={[
        {
          icon: ukFlag,
          label: t('en'),
          value: 'en',
        },
        {
          icon: japanFlag,
          label: t('jp'),
          value: 'jp',
        },
        {
          icon: vietnamFlag,
          label: t('vi'),
          value: 'vi',
        },
      ]}
    />
  )
}

export default LocaleSwitcher
