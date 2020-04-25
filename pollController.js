const Poll = require('./Poll')

exports.createPollGetController = (req, res, next) => {
  res.render('create')
}

exports.createPollPostController = async (req, res, next) => {
  let { title, description, options } = req.body
  console.log(req.body)
  options = options.map(option => {
    return {
      name: option,
      vote: 0,
    }
  })

  let poll = new Poll({
    title, 
    description,
    options,
  })

  try{
    await poll.save()
    res.redirect('/polls')
  } catch (e){
    console.log(e)
  }
}

exports.getAllPolls = async (req, res, next) => {
  try{
    let polls = await Poll.find()
    res.render('polls', {polls})
  } catch (e){
    console.log(e)
  }
}