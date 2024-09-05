export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date + 'T00:00:00') : date
  return dateObj.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit'
  })
}
