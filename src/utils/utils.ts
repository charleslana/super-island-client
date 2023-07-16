import { toast } from 'bulma-toast';
import type ToastEnum from '@/enum/ToastEnum';

export function showToast(message: string, type: ToastEnum): void {
  toast({
    message: message,
    type: type,
    dismissible: true,
    duration: 3000,
    single: true,
    pauseOnHover: true,
    animate: { in: 'fadeIn', out: 'fadeOut' },
    position: 'top-center'
  });
}
