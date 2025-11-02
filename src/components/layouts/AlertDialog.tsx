'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import useAlertDialogStore from '@/stores/alertDialog.store'
import { GradientButton } from '../ui/gradient-button'

const ActionAlertDialog = () => {
  const { isOpen, title, description, cancel, action } = useAlertDialogStore()
  if (!isOpen) {
    return null
  }

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancel} className='focus:!outline-hidden'>
            Cancel
          </AlertDialogCancel>
          <GradientButton onClick={action}>Continue</GradientButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ActionAlertDialog
