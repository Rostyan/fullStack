import React, { Component } from 'react';

class NewCandidate extends Component {
	render() {
		return (
			<div className='container'>
				<h1 className='headerEmployeeCreate'>Створення людини в базі</h1>
				<form action='/api/new_candidate/' method='POST'>
					<p className="candidateInputHeader">Ім'я та прізвище:</p>
					<div className='form-row'>
						<div className='form-group col'>
							<input type="text" name='name' class="form-control" placeholder="Введіть ім'я"/>
						</div>
						<div className='form-group col'>
							<input type="text" name='lastName' class="form-control" placeholder="Введіть прізвище"/>
						</div>
					</div>
					<div className="form-row">
						<div className='form-group col'>
							<label className="candidateInputHeader">Досвід роботи з :</label>
							<select className="form-control" name="expirienceFrom">
								<option>2007</option>
								<option>2008</option>
								<option>2009</option>
								<option>2010</option>
								<option>2011</option>
								<option>2012</option>
							</select>
						</div>
						<div className='form-group col'>
							<label className="candidateInputHeader">по :</label>
							<select className="form-control" name="expirienceTo">
								<option>2007</option>
								<option>2008</option>
								<option>2009</option>
								<option>2010</option>
								<option>2011</option>
								<option>2012</option>
							</select>
						</div>								
					</div>
					<p className="candidateInputHeader">Вкажіть напрямки по яких спеціалізується дана людина:</p>
					<input type="text" name='devType' className="form-control" placeholder="Наприклад Front-End, Back-End ... і.т.д"/>
					<div className='form-row'>
						<div className='form-group col-4'>
							<label className="candidateInputHeader">Локація:</label>
							<input type="text" name='location' className="form-control" placeholder='Область'></input>
						</div>
						<div className='form-group col-4'>
						<p className="candidateInputHeader workTypeHeader">Оберіть тип роботи:</p>
							<div class="custom-control custom-radio">
								<input type="radio" id="workType1" name="workType" className="custom-control-input" value='office' checked/>
								<label className="custom-control-label" for="workType1">В офісі</label>
							</div>
							<div class="custom-control custom-radio">
								<input type="radio" id="workType2" name="workType" className="custom-control-input" value='remote'/>
								<label className="custom-control-label" for="workType2">Віддалено</label>
							</div>
						</div>
						<div className='form-group col-4'>
						<p className="candidateInputHeader workTypeHeader">Оберіть тип графіку:</p>
							<div className="custom-control custom-radio">
								<input type="radio" id="workTime1" name="workTime" className="custom-control-input" value='fullTime' checked/>
								<label className="custom-control-label" for="workTime1">Повний робочий день</label>
							</div>
							<div className="custom-control custom-radio">
								<input type="radio" id="workTime2" name="workTime" className="custom-control-input" value='partTime'/>
								<label className="custom-control-label" for="workTime2">Не повний робочий день</label>
							</div>
						</div>
					</div>
					<p className="candidateInputHeader">Email:</p>
					<div className='form-group'>
						<input type='email' name='email' className='form-control' placeholder='введіть email'></input>
					</div>
					<p className="candidateInputHeader workTypeHeader">Соціальні мережі:</p>
					<div className='form-group row'>
						<label className="col-sm-1 col-form-label socialMedia">Facebook:</label>
						<div className="col-sm-3">
							<input type="text" name='facebook' className="form-control" placeholder="Вставте посилання"/>
						</div>
						<label className="col-sm-1 col-form-label socialMedia">Twitter:</label>
						<div className="col-sm-3">
							<input type="text" name='twitter' className="form-control" placeholder="Вставте посилання"/>
						</div>
						<label className="col-sm-1 col-form-label socialMedia">LinkedIn:</label>
						<div className="col-sm-3">
							<input type="text" name='linkedin' className="form-control" placeholder="Вставте посилання"/>
						</div>
					</div>
					<div className='form-group'>
						<label className="candidateInputHeader">Остання позиція:</label>
						<input type="text" name='lastPosition' className="form-control" placeholder="Де працював, чи де працює..."/>
					</div>
					<p>Тут має бути технологічний стек</p>
					<div className="form-group">
						<label className="candidateInputHeader">Коментар по людині:</label>
						<textarea name='commentAboutPerson' className="form-control" rows="3" placeholder="Наприклад опишіть слабкі та сильні сторони людини..."></textarea>
					</div>					
					<div class="form-group">
						<label className="candidateInputHeader">Коментар по комункації:</label>
						<textarea name='commentAboutComunication' className="form-control" rows="3" placeholder="Наприклад опишіть наскільки людина комунікабельна..."></textarea>
					</div>
					<p>Тут має бути нагадування</p>
					<div className="form-group">
						<label className="candidateInputHeader">Прикріпити резюме:</label>
						<input type="file" name='cvFile' className="form-control-file"/>
					</div>
					<input type='submit' value='Зберегти' className='btn btn-primary createCandidateBtn'/>
				</form>
			</div>
		);
	}
}

export default NewCandidate;