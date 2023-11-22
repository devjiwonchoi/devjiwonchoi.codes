import { SubmitButton } from './Buttons/SubmitButton'
import { sendEmailToMe } from '@/utils'

export function RequestForm({ email }: { email?: string | null }) {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const { email, subject, text } = Object.fromEntries(formData)
    try {
      const response = await sendEmailToMe(
        email as string,
        subject as string,
        text as string,
      )
      if (response) {
        alert(response.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">
        Request
      </h2>
      <form action={handleSubmit} className="content-center space-y-8">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-neutral-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full appearance-none border-b border-neutral-200 bg-transparent p-2.5 text-sm text-neutral-200 shadow-sm focus:outline-none"
            defaultValue={email ?? ''}
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-neutral-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block w-full appearance-none border-b border-neutral-200 bg-transparent p-2.5 text-sm text-neutral-200 shadow-sm focus:outline-none"
            placeholder="Let me know how I can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="text"
            className="mb-4 block text-sm font-medium text-neutral-300"
          >
            Your message
          </label>
          <textarea
            id="text"
            name="text"
            rows={6}
            className="block w-full appearance-none border border-neutral-200 bg-transparent p-2.5 text-sm text-neutral-200 shadow-sm focus:outline-none"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <SubmitButton />
      </form>
    </>
  )
}