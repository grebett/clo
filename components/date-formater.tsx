import { parseISO, format } from 'date-fns'
import { fr } from 'date-fns/locale';

type Props = {
  dateString: string
}

const DateFormater = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}><pre>{format(date, 'dd MMMM yyyy  hh:mm', { locale: fr })}</pre></time>
}

export default DateFormater
