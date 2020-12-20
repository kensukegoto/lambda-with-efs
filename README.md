# 参考

- https://github.com/aws-samples/aws-lambda-efs-samples
- https://github.com/aws/serverless-application-model
- https://53ningen.com/sam-efs-lambda/
- [実践CloudFormation VPC編](https://qiita.com/kazumasamatsumo/items/97d69959f037f9498c1e)

# ポイント

VPC,Subnet,SG,EFSの作成とそれを使うLambdaのデプロイを分ける。同じにすると、2020/12/20現在でエラーが出る。

```
（略）has mount targets created in all availability zones the function will execute in, but not all are in the available life cycle state yet. Please wait for them to become available and try the request again.（略）
```