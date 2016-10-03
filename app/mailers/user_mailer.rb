class UserMailer < ActionMailer::Base
  default from: "\"Prelauncher\" <hello@readbiome.com>"
  layout 'mailer'

    def sign_up_email(user)
        @user = user
        @email_share_subject = URI.encode("Biome is coming soon—and you can read it for free.")
        @url_escaped_share_link = URI.encode(@user.referral_url(root_url))
        @user_share_email_body = URI.encode("Hey there,
\r\n\
I’ve recently been reading a Young Adult Science Fiction novel called Biome, and I think you’d love it. Right now you can read up to half of the book by clicking the link below, and even refer friends to get the entire novel free!
\r\n\
READ BIOME - www.readbiome.com
\r\n\
EARN A FREE COPY - #{@user.referral_url(root_url)}
\r\n\
The Kickstarter for the first print run begins on October 11, which is also when this offer ends. The more friends you refer before then, the more stuff you’ll bag. SO DO IT.
\r\n\
Talk soon!")

        mail(:to => user.email, :subject => "Thanks for being a part of Biome’s story.")
    end
end
