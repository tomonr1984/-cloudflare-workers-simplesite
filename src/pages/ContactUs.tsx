import Nano from 'nano-jsx'
import { useState } from 'nano-jsx/lib/hooks/useState'
import { LayoutDefault } from '../components/layouts/LayoutDefault'

export const ContactUs = () => {
  const [name, setName] = useState('taro', 'name')
  const [mail, setMail] = useState('', 'mail')
  const [message, setMessage] = useState('', 'message')

  const handleSubmit = (event: any) => {
    console.log('dfjoeijfoe')
    const formData = new FormData()
    for (const [name, value] of formData.entries()) {
      console.log(name + ': ' + value) // fname: John // lname: Doe
    }
  }
  return (
    <LayoutDefault>
      <div clsas="container">
        <form class="box" action="/contactus" method="POST" >
          <div class="field">
            <label class="label">お名前</label>
            <div class="control">
              <input class="input" type="text" name="name" />
            </div>
          </div>

          <div class="field">
            <label class="label">メールアドレス</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">お問い合わせ内容</label>
            <div class="control">
            <textarea class="textarea" name="message"></textarea>
            </div>
          </div>

          <button class="button is-primary">送信</button>
        </form>
      </div>
    </LayoutDefault>
  )
}