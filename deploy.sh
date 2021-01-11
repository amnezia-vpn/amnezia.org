function ssh_cmd () {
  ssh -o LogLevel=error -o StrictHostKeyChecking=no $REMOTE_USER:$REMOTE_PASSWORD@$REMOTE_IP "$1"
}

REMOTE_PATH="/var/www/AMNEZIA.ORG"
echo "===> Clean folders"
ssh_cmd "rm -rf $REMOTE_PATH/*"

echo "===> Deploy"
ssh_cmd "cd $REMOTE_PATH && wget https://github.com/amnezia-vpn/amnezia.org/archive/master.zip"
ssh_cmd "unzip $REMOTE_PATH/master.zip -d $REMOTE_PATH"
ssh_smd "mv -f $REMOTE_PATH/amnezia.org*/docs/* $REMOTE_PATH/ && rm $REMOTE_PATH/master.zip"
ssh_smd certbot -q renew