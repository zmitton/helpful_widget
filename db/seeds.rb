require 'faker'


Article.create(author: "zacmitton", title: "how to make something", subject:"technology", body: "Its really easy to make something all you have to do is make it! here are the deatails of this specific project in latin:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at sem leo. Integer libero nisl, rhoncus vel nisl et, euismod pulvinar lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi bibendum dolor quis lacus molestie sodales. Pellentesque accumsan, metus eget ultricies facilisis, dolor orci tincidunt risus, quis dapibus urna arcu ut velit. Sed posuere sed nisl sit amet ullamcorper. Duis felis diam, pellentesque nec mauris non, iaculis lacinia turpis. Nullam volutpat orci vitae tortor pharetra, id consectetur justo faucibus. Integer aliquet sapien ac eros porttitor, ut feugiat dolor venenatis. Vivamus tristique dignissim libero, sed lobortis enim. Sed sit amet pharetra magna. In imperdiet turpis ut venenatis aliquet ")

Reason.create(description: "Other")
Reason.create(description: "Needs more photos")
Reason.create(description: "Innacurate")
Reason.create(description: "Out of date")
Reason.create(description: "Too general")


Vote.create(article_id: 1, helpful: false)
VoterReason.create(vote_id: 1, reason_id:1)
VoterReason.create(vote_id: 1, reason_id:2)
VoterReason.create(vote_id: 1, reason_id:3)
VoterReason.create(vote_id: 1, reason_id:4)

Vote.create(article_id: 1, helpful: false)
VoterReason.create(vote_id: 1, reason_id:1)
VoterReason.create(vote_id: 1, reason_id:2)
VoterReason.create(vote_id: 1, reason_id:3)

Vote.create(article_id: 1, helpful: false)
VoterReason.create(vote_id: 1, reason_id:1)
VoterReason.create(vote_id: 1, reason_id:2)

Vote.create(article_id: 1, helpful: false)
VoterReason.create(vote_id: 1, reason_id:1)

Vote.create(article_id: 1, helpful: true)
Vote.create(article_id: 1, helpful: true)
