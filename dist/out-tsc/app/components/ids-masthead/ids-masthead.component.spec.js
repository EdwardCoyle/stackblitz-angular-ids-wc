import { TestBed } from '@angular/core/testing';
import { IdsMastheadComponent } from './ids-masthead.component';
describe('IdsMastheadComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsMastheadComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsMastheadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-masthead.component.spec.js.map