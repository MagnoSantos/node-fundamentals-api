exports.onError = (ex, res) => {
  res
    .status(500)
    .send({ message: "Falha ao processar a requisição", data: ex });
};
