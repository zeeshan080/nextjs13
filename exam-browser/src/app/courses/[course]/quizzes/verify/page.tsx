import { Card, CardHeader, CardTitle } from '@/app/components/ui/card'
import { useSearchParams } from 'next/navigation'


type Props = {}

export default function QuizVerification({}: Props) {
  const searchParams = useSearchParams()
  const searh = searchParams.get('id')
  return (
    <main>
        <Card>
            <CardHeader>
                <CardTitle>
                    Quiz BBC TypeScript {searh}
                </CardTitle>
            </CardHeader>
        </Card>
    </main>
  )
}