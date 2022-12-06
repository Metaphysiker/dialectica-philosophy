#!/bin/bash
rails assets:clobber
RAILS_ENV=production rails assets:precompile
git add .
git commit -m "precompile"
git push origin main


ssh sandro@159.65.120.231 << EOF
  cd dialectica-philosophy
  git stash
  git pull origin main
  bundle config set --local without 'development test'
  bundle install
  RAILS_ENV=production rails db:migrate
EOF

ssh root@159.65.120.231 << EOF
  cd /home/sandro/dialectica-philosophy/
  sudo service nginx restart
EOF

yarn install --check-files
