class UserMailer < ActionMailer::Base
  default from: "\"Prelauncher\" <hello@readbiome.com>"
  layout 'mailer'

    def sign_up_email(user)
        @user = user
        mail(:to => user.email, :subject => "Thanks for being a part of Biome’s story.")
    end
end
