# 参考

- https://github.com/aws-samples/aws-lambda-efs-samples
- https://github.com/aws/serverless-application-model
- https://53ningen.com/sam-efs-lambda/
- [実践CloudFormation VPC編](https://qiita.com/kazumasamatsumo/items/97d69959f037f9498c1e)
- [Amazon Elastic File System（EFS）を使ううえでの勘所](https://qiita.com/taichimachima/items/f7d47b68aac2a11ea7cc)

# ポイント

VPC,Subnet,SG,EFSの作成とそれを使うLambdaのデプロイを分ける。同じにすると、2020/12/20現在でエラーが出る。

```
（略）has mount targets created in all availability zones the function will execute in, but not all are in the available life cycle state yet. Please wait for them to become available and try the request again.（略）
```

EFS確認用にEC2を立てる場合、もし停止したら再度マウントする必要がある。じゃ無いと、アタッチされているようで中身が何も表示されない。

# Arnを取得

## 参考

https://qiita.com/t-fujiwara/items/835cccbef7ec6d199251

## サブネット

```
# tag名:Nameがfor-efs-iac-subnetのサブネット

aws ec2 describe-subnets --filters "Name=tag:Name,Values=for-efs-iac-subnet"
```

## セキュリティグループ

```
# セキュリティグループ一覧

aws ec2 describe-security-groups --query "SecurityGroups[].[GroupName,GroupId]" --output table
```

## EFS

### 参考

https://docs.aws.amazon.com/cli/latest/reference/efs/index.html

```
# アクセスポイントの一覧表

aws efs describe-access-points --output table
```


