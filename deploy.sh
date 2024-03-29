function ssh_cmd () {
  sshpass -p $REMOTE_PASSWORD ssh -o LogLevel=error -o StrictHostKeyChecking=no $REMOTE_USER@$REMOTE_IP "$1"
}

REMOTE_PATH="/var/www/AMNEZIA.ORG"
echo "===> Clean folders"
ssh_cmd "rm -rf $REMOTE_PATH/*"
ssh_cmd "ls -al $REMOTE_PATH/"

echo "===> Deploy"
ssh_cmd "cd $REMOTE_PATH && wget https://github.com/amnezia-vpn/amnezia.org/archive/master.zip"
ssh_cmd "unzip $REMOTE_PATH/master.zip -d $REMOTE_PATH"
ssh_cmd "shopt -s dotglob && mv -f $REMOTE_PATH/amnezia.org*/docs/* $REMOTE_PATH/ && rm $REMOTE_PATH/master.zip"
ssh_cmd "certbot -q renew --cert-name amnezia.org"
ssh_cmd "certbot -q renew --cert-name ru.amnezia.org"
ssh_cmd "certbot -q renew --cert-name en.amnezia.org"
