import useAlertDialogStore, { AlertDialogOptions } from '@/stores/alertDialog.store'

export const useAlertDialog = () => {
  const { open } = useAlertDialogStore()
  const showAlertDialog = (options: AlertDialogOptions) => {
    open(options)
  }
  return showAlertDialog
}
